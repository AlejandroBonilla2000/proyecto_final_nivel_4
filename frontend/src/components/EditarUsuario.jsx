// EditarUsuario.jsx
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
    <div className="container mx-auto my-8">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold">Editar Usuario</h2>
      </div>
      <div className="mt-4">
        {loading ? (
          <p className="text-gray-600">Cargando usuario...</p>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                value={usuario.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="usuario"
                value={usuario.usuario}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clave">
                Clave
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="clave"
                type="password"
                placeholder="Clave"
                name="clave"
                value={usuario.clave}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
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

