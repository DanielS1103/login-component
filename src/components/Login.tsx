import "./styles.css";

import React from "react";

import image from "../assets/image.png";
import GoogleButton from "./google/GoogleButton";

interface LoginConfig {
  siteName: string;
  siteSubtitle: string;
  loginInstructions: string;
  contactEmail: string;
}

const Login = ({
  siteName = "Nombre del sitio web",
  siteSubtitle = "CMS - Gestor de contenidos",
  loginInstructions = "Accede con tu correo institucional @unal.edu.co, serás redirigido para validar tu identidad.",
  contactEmail = "XXXXXXXX@unal.edu.co",
}: LoginConfig) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image-section">
          <img src={image} alt="Login background" className="login-image" />
        </div>
        <div className="login-content">
          <h2 className="login-title">{siteName}</h2>
          <p className="login-subtitle">{siteSubtitle}</p>
          <p className="login-text">{loginInstructions}</p>
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
          <p className="access-problems2">{contactEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
