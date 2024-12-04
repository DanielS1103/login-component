import React from "react";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import { decode } from "../../assets/utils/decode";

export const GoogleButton = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  function handleError() {
    console.error("Error al iniciar sesión con Google");
  }

  function handleSuccess(credentialResponse: CredentialResponse) {
    console.log("Sesión iniciada con Google", credentialResponse);
    if (credentialResponse.credential) {
      const { payload } = decode(credentialResponse.credential);
      console.log("Payload decodificado", payload);
      setIsLoggedIn(payload.email);
    }
  }

  return (
    <div className="google-login-button">
      {!isLoggedIn ? (
        <GoogleLogin
          useOneTap
          onError={handleError}
          onSuccess={handleSuccess}
        />
      ) : (
        <div>El usuario inició sesión: {isLoggedIn}</div>
      )}
    </div>
  );
};

export default GoogleButton;
