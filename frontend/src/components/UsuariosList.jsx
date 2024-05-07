import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UsuariosList = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const handleEdit = (id) => {
    navigate(`/editar-usuario/${id}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 'auto', marginTop: '20px', maxWidth: '800px' }}>
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>Lista de Usuarios</h2>
      </div>
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Cargando usuarios...</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Nombre</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Usuario</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Clave</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{usuario.id}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{usuario.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{usuario.usuario}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{usuario.clave}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                    <button
                      style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}
                      onClick={() => handleEdit(usuario.id)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UsuariosList;
