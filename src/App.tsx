import "./App.css";

import React, { useState } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Login from "./components/login";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fondo">
      {!isLoggedIn ? (
        <GoogleOAuthProvider clientId="972707235682-hjp2i0ttjb671aoah5pe9qmn77cb91j5.apps.googleusercontent.com">
          <Login backgroundImageUrl="https://st.depositphotos.com/1594308/2118/i/600/depositphotos_21186975-stock-photo-business-partners-making-pile-of.jpg" />
        </GoogleOAuthProvider>
      ) : (
        <div>Bienvenido - Contenido después del login</div>
      )}
    </div>
  );
};

export default App;
