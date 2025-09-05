import React, { useState, useEffect } from 'react';
import { usuarioService } from '../services/usuarioService.js';

const UsuariosList = () => {
  // Estados para manejar los datos y el estado de la aplicación
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUsuario, setSelectedUsuario] = useState(null);

  // Cargar usuarios al montar el componente
  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Función para cargar usuarios desde la API
  const cargarUsuarios = async () => {
    try {
      setLoading(true);
      setError(null);
      const usuariosData = await usuarioService.getUsuarios();
      setUsuarios(usuariosData);
    } catch (err) {
      setError(err.message);
      console.error('Error cargando usuarios:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para ver detalles de un usuario
  const verDetalleUsuario = async (id) => {
    try {
      setLoading(true);
      const usuario = await usuarioService.getUsuarioById(id);
      setSelectedUsuario(usuario);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar un usuario
  const eliminarUsuario = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      return;
    }

    try {
      setLoading(true);
      await usuarioService.deleteUsuario(id);
      // Recargar la lista después de eliminar
      await cargarUsuarios();
      // Si el usuario eliminado estaba seleccionado, limpiarlo
      if (selectedUsuario && selectedUsuario.id === id) {
        setSelectedUsuario(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para refrescar la lista
  const refrescarLista = () => {
    cargarUsuarios();
  };

  // Renderizado del componente
  if (loading && usuarios.length === 0) {
    return (
      <div className="usuarios-container">
        <div className="loading">
          <p>Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="usuarios-container">
      <div className="usuarios-header">
        <h1>Lista de Usuarios</h1>
        <button 
          onClick={refrescarLista} 
          disabled={loading}
          className="btn-refresh"
        >
          {loading ? 'Cargando...' : 'Refrescar'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
          <button onClick={refrescarLista} className="btn-retry">
            Reintentar
          </button>
        </div>
      )}

      <div className="usuarios-content">
        {/* Lista de usuarios */}
        <div className="usuarios-list">
          <h2>Usuarios ({usuarios.length})</h2>
          {usuarios.length === 0 ? (
            <p>No hay usuarios disponibles.</p>
          ) : (
            <div className="usuarios-grid">
              {usuarios.map((usuario) => (
                <div key={usuario.id} className="usuario-card">
                  <div className="usuario-info">
                    <h3>{usuario.nombre}</h3>
                    <p className="usuario-email">{usuario.email}</p>
                    <p className="usuario-rol">Rol: {usuario.rol}</p>
                    <p className="usuario-estado">
                      Estado: {usuario.activo ? 'Activo' : 'Inactivo'}
                    </p>
                    {usuario.fechaCreacion && (
                      <p className="usuario-fecha">
                        Creado: {new Date(usuario.fechaCreacion).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="usuario-actions">
                    <button 
                      onClick={() => verDetalleUsuario(usuario.id)}
                      className="btn-details"
                    >
                      Ver Detalles
                    </button>
                    <button 
                      onClick={() => eliminarUsuario(usuario.id)}
                      className="btn-delete"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Panel de detalles del usuario seleccionado */}
        {selectedUsuario && (
          <div className="usuario-details">
            <h2>Detalles del Usuario</h2>
            <div className="details-content">
              <p><strong>ID:</strong> {selectedUsuario.id}</p>
              <p><strong>Nombre:</strong> {selectedUsuario.nombre}</p>
              <p><strong>Email:</strong> {selectedUsuario.email}</p>
              <p><strong>Rol:</strong> {selectedUsuario.rol}</p>
              <p><strong>Estado:</strong> {selectedUsuario.activo ? 'Activo' : 'Inactivo'}</p>
              {selectedUsuario.fechaCreacion && (
                <p><strong>Fecha de Creación:</strong> {new Date(selectedUsuario.fechaCreacion).toLocaleDateString()}</p>
              )}
            </div>
            <button 
              onClick={() => setSelectedUsuario(null)}
              className="btn-close"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .usuarios-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .usuarios-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .usuarios-header h1 {
          color: #333;
          margin: 0;
        }

        .btn-refresh, .btn-retry, .btn-details, .btn-delete, .btn-close {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .btn-refresh, .btn-retry {
          background-color: #007bff;
          color: white;
        }

        .btn-refresh:hover, .btn-retry:hover {
          background-color: #0056b3;
        }

        .btn-refresh:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }

        .error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
          border: 1px solid #f5c6cb;
        }

        .loading {
          text-align: center;
          padding: 40px;
          color: #666;
        }

        .usuarios-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .usuarios-list h2 {
          color: #333;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
        }

        .usuarios-grid {
          display: grid;
          gap: 15px;
        }

        .usuario-card {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .usuario-info h3 {
          margin: 0 0 8px 0;
          color: #007bff;
        }

        .usuario-email {
          color: #666;
          font-style: italic;
          margin: 4px 0;
        }

        .usuario-rol, .usuario-estado, .usuario-fecha {
          margin: 4px 0;
          font-size: 14px;
          color: #555;
        }

        .usuario-actions {
          display: flex;
          gap: 8px;
        }

        .btn-details {
          background-color: #28a745;
          color: white;
        }

        .btn-details:hover {
          background-color: #218838;
        }

        .btn-delete {
          background-color: #dc3545;
          color: white;
        }

        .btn-delete:hover {
          background-color: #c82333;
        }

        .usuario-details {
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 20px;
          height: fit-content;
        }

        .usuario-details h2 {
          color: #333;
          border-bottom: 2px solid #28a745;
          padding-bottom: 10px;
          margin-top: 0;
        }

        .details-content p {
          margin: 10px 0;
          line-height: 1.5;
        }

        .btn-close {
          background-color: #6c757d;
          color: white;
          margin-top: 15px;
        }

        .btn-close:hover {
          background-color: #5a6268;
        }

        @media (max-width: 768px) {
          .usuarios-content {
            grid-template-columns: 1fr;
          }
          
          .usuarios-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .usuario-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .usuario-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default UsuariosList;