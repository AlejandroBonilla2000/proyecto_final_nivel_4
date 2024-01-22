// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UsuariosList from './UsuariosList';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const userDataString = localStorage.getItem('usuario');
      const userData = JSON.parse(userDataString);
      setUserData(userData);

      if (!token || !userData) {
        console.error('No hay token o información de usuario. Usuario no autenticado.');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/usuario', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserInfo(response.data);
      } catch (error) {
        console.error('Error al obtener información del usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  const navigateToUsuariosList = () => {
    navigate('/usuarios-list');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          {loading ? (
            <p className="text-gray-600">Cargando información del usuario...</p>
          ) : (
            userData && (
              <>
                <p className="text-xl font-semibold mb-2">¡Bienvenido, {userData.name}!</p>
                <p className="text-gray-600">Email: {userData.email}</p>
              </>
            )
          )}
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          type="button"
          onClick={navigateToUsuariosList}
        >
          Ir a la Lista de Usuarios
        </button>
        <button
          className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          type="button"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
