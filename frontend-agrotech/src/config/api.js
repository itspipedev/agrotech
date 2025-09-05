// Configuración de la API
const isDevelopment = import.meta.env.MODE === 'development';

// Para desarrollo en Replit usamos el dominio completo, para producción la ruta relativa
const getApiBaseUrl = () => {
  if (isDevelopment) {
    // En desarrollo de Replit, usa el dominio del backend
    return `https://${import.meta.env.VITE_REPLIT_DOMAIN || '8eaf0ac9-1996-4f7e-acde-78be26ed6e81-00-2hh7k4tj227yt.kirk.replit.dev'}:3000/api/v1`;
  } else {
    // En producción, usa rutas relativas
    return '/api/v1';
  }
};

export const API_CONFIG = {
  BASE_URL: getApiBaseUrl(),
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

// Función helper para crear URLs completas
export const createApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};

// Función helper para hacer peticiones HTTP
export const apiRequest = async (endpoint, options = {}) => {
  const url = createApiUrl(endpoint);
  
  const config = {
    timeout: API_CONFIG.TIMEOUT,
    headers: {
      ...API_CONFIG.HEADERS,
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};