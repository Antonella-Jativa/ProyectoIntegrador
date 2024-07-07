import React, { useState } from 'react';
import loginstyle from '../styles/page_login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Recupera los usuarios almacenados en localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Verifica las credenciales
    if (existingUsers[username] && existingUsers[username].password === password) {
      alert('Inicio de sesión exitoso.');
      window.location.href = '/game'; // Redirige al usuario a la página de juego
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className={loginstyle.body}>
      <div className={loginstyle.container}>
        <div className={loginstyle.imagen}>
          <img id={loginstyle.registra_img} src="/img/LOGIN.png" alt="Login" />
        </div>
        <div className={loginstyle.space}>
          <div className={loginstyle.form}>
            <form onSubmit={handleSubmit}>
              <div className={loginstyle.tittle}>
                <b className={loginstyle.headline}>¡Hola! ¡Qué bueno es verte por aquí!</b>
              </div>
              <div className={loginstyle.labels}>
                <label htmlFor="username">Nombre de Usuario o Correo</label>
                <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} required />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
              </div>
              <div className={loginstyle.buttons}>
                <button className={loginstyle.button} id={loginstyle.CancelButton} type="button" onClick={() => window.location.href = '/'}>
                  Cancelar
                </button>
                <button className={loginstyle.button} id={loginstyle.AcceptButton} type="submit">
                  Iniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
