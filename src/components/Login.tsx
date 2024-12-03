import React from "react";
import "./styles.css";

interface LoginComponentProps {
  backgroundImageUrl: string;
  googleLogoUrl: string;
  onGoogleLogin?: () => void;
}

const Login: React.FC<LoginComponentProps> = ({
  backgroundImageUrl,
  googleLogoUrl,
  onGoogleLogin,
}) => {
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
          <h2 className="login-title">Acceder</h2>
          <p>
            Inicia sesión en tu cuenta para acceder a todos los beneficios de
            nuestra plataforma.
          </p>
          <button className="google-login-button" onClick={onGoogleLogin}>
            <img
              src={googleLogoUrl}
              alt="Google icon"
              className="google-icon"
              width={24}
              height={24}
            />
            Iniciar sesión con Google
          </button>
        </div>

        <div className="login-footer">
          <p className="access-problems">¿Problemas para acceder?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
