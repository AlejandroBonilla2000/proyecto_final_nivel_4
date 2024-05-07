import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      const token = response.data.access_token; 
      localStorage.setItem('token', token);

      const userData = response.data.user;
      localStorage.setItem('usuario',  JSON.stringify(userData));
      console.log('Datos del usuario:', userData);
      console.log(response.data);
      // Redirect user to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log('Credenciales inválidas:', error.response.data.message);
        // Mostrar mensajes de error al usuario según sea necesario
      } else {
        console.error('Error durante el inicio de sesión:', error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>Inicia Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor='email' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb', outline: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor='password' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Contraseña:</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb', outline: 'none' }}
              required
            />
          </div>
          <button
            type='submit'
            style={{ width: '100%', padding: '0.75rem', backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
          >
            Ingresar
          </button>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <span style={{ marginRight: '0.25rem' }}>¿No tienes una cuenta?</span>
            <a href='/' style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>Registrarse</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
