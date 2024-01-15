import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/registro', formData);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log('Validation errors:', error.response.data.errors);
        // Display error messages to the user as needed
      } else {
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
          >
            Registrarse
          </button>
          <div className='mt-4 text-center'>
            <span className='mr-2'>¿Ya tienes una cuenta?</span>
            <a href='/login' className='text-blue-500 hover:text-blue-600'>
              Inicia sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
