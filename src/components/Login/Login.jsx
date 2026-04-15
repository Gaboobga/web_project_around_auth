// src/components/Login/Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className='auth'>
      <h2 className='auth__title'>Inicia sesión</h2>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='auth__input'
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='auth__button' type='submit'>
          Inicia sesión
        </button>
      </form>
      <p className='auth__redirect'>
        ¿Aún no eres miembro?{' '}
        <Link className='auth__link' to='/signup'>
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
};

export default Login;