import React, { useState } from "react";
import Login from "./components/login";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Iniciando sesión con Google");
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login
          backgroundImageUrl="https://st.depositphotos.com/1594308/2118/i/600/depositphotos_21186975-stock-photo-business-partners-making-pile-of.jpg"
          googleLogoUrl="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png"
          onGoogleLogin={handleGoogleLogin}
        />
      ) : (
        <div>Bienvenido - Contenido después del login</div>
      )}
    </div>
  );
};

export default App;
