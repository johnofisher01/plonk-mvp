import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { cognitoUser } = useAuth();
  if (!cognitoUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;