// UsuariosList.jsx
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
    <div className="container mx-auto my-8">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold">Lista de Usuarios</h2>
      </div>
      <div className="mt-4">
        {loading ? (
          <p className="text-gray-600">Cargando usuarios...</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Usuario</th>
                <th className="py-2 px-4 border-b">Clave</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td className="py-2 px-4 border-b">{usuario.id}</td>
                  <td className="py-2 px-4 border-b">{usuario.name}</td>
                  <td className="py-2 px-4 border-b">{usuario.usuario}</td>
                  <td className="py-2 px-4 border-b">{usuario.clave}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 mr-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
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


