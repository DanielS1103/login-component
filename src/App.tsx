import './App.css';

import React, { useState } from 'react';

import Login from './components/login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Iniciando sesión con Google");
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onGoogleLogin={handleGoogleLogin} />
      ) : (
        <div>Bienvenido - Contenido después del login</div>
      )}
    </div>
  );
};

export default App;
