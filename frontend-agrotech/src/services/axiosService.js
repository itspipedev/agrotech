import axios from 'axios';

// Configuración de axios para desarrollo y producción
const isDevelopment = import.meta.env.MODE === 'development';

const getApiBaseUrl = () => {
  if (isDevelopment) {
    // En desarrollo de Replit, usa el dominio del backend
    return `https://${import.meta.env.VITE_REPLIT_DOMAIN || '8eaf0ac9-1996-4f7e-acde-78be26ed6e81-00-2hh7k4tj227yt.kirk.replit.dev'}:3000/api/v1`;
  } else {
    // En producción, usa rutas relativas
    return '/api/v1';
  }
};

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor para manejar requests
apiClient.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar tokens de autenticación si los tienes
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    
    console.log('Enviando request a:', config.url);
    return config;
  },
  (error) => {
    console.error('Error en el request:', error);
    return Promise.reject(error);
  }
);

// Interceptor para manejar responses
apiClient.interceptors.response.use(
  (response) => {
    console.log('Respuesta recibida de:', response.config.url);
    return response;
  },
  (error) => {
    console.error('Error en la respuesta:', error);
    
    // Manejar errores específicos
    if (error.response) {
      // El servidor respondió con un código de error
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          console.error('No autorizado - considera redirigir al login');
          break;
        case 404:
          console.error('Recurso no encontrado');
          break;
        case 500:
          console.error('Error interno del servidor');
          break;
        default:
          console.error('Error del servidor:', data?.message || 'Error desconocido');
      }
    } else if (error.request) {
      // La request se hizo pero no se recibió respuesta
      console.error('No se pudo conectar con el servidor');
    } else {
      // Algo pasó al configurar la request
      console.error('Error al configurar la request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Función para transformar datos de usuario (igual que en el otro servicio)
const transformUsuarioData = (usuarioApi) => {
  return {
    id: usuarioApi.id_usuario || usuarioApi.id,
    nombre: usuarioApi.nombre_usuario || usuarioApi.nombre,
    email: usuarioApi.correo_electronico || usuarioApi.email,
    fechaCreacion: usuarioApi.fecha_creacion || usuarioApi.createdAt,
    activo: usuarioApi.is_activo || usuarioApi.activo || true,
    rol: usuarioApi.rol_usuario || usuarioApi.rol,
  };
};

// Servicio usando axios
export const axiosUsuarioService = {
  // Obtener todos los usuarios
  async getUsuarios() {
    try {
      const response = await apiClient.get('/usuarios');
      return response.data.map(transformUsuarioData);
    } catch (error) {
      throw new Error('No se pudieron cargar los usuarios');
    }
  },

  // Obtener un usuario por ID
  async getUsuarioById(id) {
    try {
      const response = await apiClient.get(`/usuarios/${id}`);
      return transformUsuarioData(response.data);
    } catch (error) {
      throw new Error('No se pudo cargar el usuario');
    }
  },

  // Crear un nuevo usuario
  async createUsuario(usuario) {
    try {
      const response = await apiClient.post('/usuarios', usuario);
      return transformUsuarioData(response.data);
    } catch (error) {
      throw new Error('No se pudo crear el usuario');
    }
  },

  // Actualizar un usuario
  async updateUsuario(id, usuario) {
    try {
      const response = await apiClient.put(`/usuarios/${id}`, usuario);
      return transformUsuarioData(response.data);
    } catch (error) {
      throw new Error('No se pudo actualizar el usuario');
    }
  },

  // Eliminar un usuario
  async deleteUsuario(id) {
    try {
      await apiClient.delete(`/usuarios/${id}`);
      return true;
    } catch (error) {
      throw new Error('No se pudo eliminar el usuario');
    }
  }
};

export default apiClient;