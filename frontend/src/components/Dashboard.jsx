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
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {loading ? (
            <p style={{ color: '#666' }}>Cargando información del usuario...</p>
          ) : (
            userData && (
              <>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>¡Bienvenido, {userData.name}!</p>
                <p style={{ color: '#666', marginBottom: '10px' }}>Email: {userData.email}</p>
              </>
            )
          )}
        </div>
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginBottom: '10px' }}
          type="button"
          onClick={navigateToUsuariosList}
        >
          Ir a la Lista de Usuarios
        </button>
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: '#ef4444', color: '#ffffff', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
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
