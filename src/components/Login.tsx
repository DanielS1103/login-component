import "./styles.css";

import React from "react";

import GoogleButton from "./google/GoogleButton";

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
          <p className="login-subtitle">CMS - Gestor de contenidos</p>
          <p className="login-text">
            Accede con tu correo institucional @unal.edu.co, serás redirigido
            para validar tu identidad.
          </p>
          <div className="login-google">
            <GoogleButton />
          </div>
        </div>
        <hr className="divider" />
        <div className="login-footer">
          <h4>¿Tienes problemas para acceder?</h4>
          <p className="access-problems">
            Informar de un problema al siguiente correo
          </p>
          <p className="access-problems2">XXXXXXXX@unal.edu.co</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
