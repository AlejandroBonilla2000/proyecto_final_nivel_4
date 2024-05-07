import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    name: '',
    usuario: '',
    clave: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/usuarios/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [id]);

  const handleInputChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/usuarios/${id}`, usuario);
      console.log('Usuario editado correctamente');
      navigate('/usuarios-list');
    } catch (error) {
      console.error('Error al editar el usuario:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 'auto', marginTop: '20px', maxWidth: '400px' }}>
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>Editar Usuario</h2>
      </div>
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', padding: '20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Cargando usuario...</p>
        ) : (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '0.5rem' }} htmlFor="name">
                Nombre
              </label>
              <input
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0', outline: 'none' }}
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                value={usuario.name}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '0.5rem' }} htmlFor="usuario">
                Usuario
              </label>
              <input
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0', outline: 'none' }}
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="usuario"
                value={usuario.usuario}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '0.5rem' }} htmlFor="clave">
                Clave
              </label>
              <input
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0', outline: 'none' }}
                id="clave"
                type="password"
                placeholder="Clave"
                name="clave"
                value={usuario.clave}
                onChange={handleInputChange}
              />
            </div>
            <button
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4299e1', color: '#fff', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
              type="button"
              onClick={handleGuardar}
            >
              Guardar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditarUsuario;
