import { apiRequest } from '../config/api.js';

// Función para transformar los datos de la API al formato del frontend
const transformUsuarioData = (usuarioApi) => {
  return {
    id: usuarioApi.id_usuario || usuarioApi.id,
    nombre: usuarioApi.nombre_usuario || usuarioApi.nombre,
    email: usuarioApi.correo_electronico || usuarioApi.email,
    fechaCreacion: usuarioApi.fecha_creacion || usuarioApi.createdAt,
    activo: usuarioApi.is_activo || usuarioApi.activo || true,
    rol: usuarioApi.rol_usuario || usuarioApi.rol,
    // Agrega más campos según tu API
  };
};

// Función para transformar datos del frontend al formato de la API
const transformUsuarioToApi = (usuarioFrontend) => {
  return {
    id_usuario: usuarioFrontend.id,
    nombre_usuario: usuarioFrontend.nombre,
    correo_electronico: usuarioFrontend.email,
    is_activo: usuarioFrontend.activo,
    rol_usuario: usuarioFrontend.rol,
    // Agrega más campos según tu API
  };
};

// Servicio para manejar operaciones de usuarios
export const usuarioService = {
  // Obtener todos los usuarios
  async getUsuarios() {
    try {
      const response = await apiRequest('/usuarios');
      // Transformar cada usuario de la respuesta
      return response.map(transformUsuarioData);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  },

  // Obtener un usuario por ID
  async getUsuarioById(id) {
    try {
      const response = await apiRequest(`/usuarios/${id}`);
      return transformUsuarioData(response);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      throw new Error('No se pudo cargar el usuario');
    }
  },

  // Crear un nuevo usuario
  async createUsuario(usuario) {
    try {
      const usuarioApi = transformUsuarioToApi(usuario);
      const response = await apiRequest('/usuarios', {
        method: 'POST',
        body: JSON.stringify(usuarioApi),
      });
      return transformUsuarioData(response);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw new Error('No se pudo crear el usuario');
    }
  },

  // Actualizar un usuario
  async updateUsuario(id, usuario) {
    try {
      const usuarioApi = transformUsuarioToApi(usuario);
      const response = await apiRequest(`/usuarios/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuarioApi),
      });
      return transformUsuarioData(response);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw new Error('No se pudo actualizar el usuario');
    }
  },

  // Eliminar un usuario
  async deleteUsuario(id) {
    try {
      await apiRequest(`/usuarios/${id}`, {
        method: 'DELETE',
      });
      return true;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw new Error('No se pudo eliminar el usuario');
    }
  }
};