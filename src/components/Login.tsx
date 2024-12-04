import './styles.css';

import React from 'react';

import GoogleButton from './google/GoogleButton';

interface LoginComponentProps {
  backgroundImageUrl: string;
}

const Login: React.FC<LoginComponentProps> = ({ backgroundImageUrl }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image-section">
          <img
            src={backgroundImageUrl}
            alt="Login background"
            className="login-image"
          />
        </div>
        <div className="login-content">
          <h2 className="login-title">Nombre del sitio web</h2>
          <p>
            Inicia sesión en tu cuenta para acceder a todos los beneficios de
            nuestra plataforma.
          </p>
          <GoogleButton />
        </div>
        <div className="login-footer">
          <h4>¿Problemas para acceder?</h4>
          <p className="access-problems">informa al siguiente correo /n aaaa</p>
          <p className="access-problems2">informa al siguiente correo</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
