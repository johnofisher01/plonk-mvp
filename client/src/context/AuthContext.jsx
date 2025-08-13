import React, { createContext, useContext, useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { awsConfig } from "../awsConfig";

const poolData = {
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId
};

const userPool = new CognitoUserPool(poolData);

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [cognitoUser, setCognitoUser] = useState(null);

  const login = (user, session) => {
    setCognitoUser({ user, session });
    localStorage.setItem("cognitoToken", session.getIdToken().getJwtToken());
  };

  const logout = () => {
    setCognitoUser(null);
    localStorage.removeItem("cognitoToken");
  };

  const value = {
    cognitoUser,
    login,
    logout,
    userPool,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}