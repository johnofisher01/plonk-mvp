import React, { useState } from "react";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { awsConfig } from "../awsConfig";
import { useNavigate } from "react-router-dom";

const poolData = {
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId,
};

const userPool = new CognitoUserPool(poolData);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: session => {
        localStorage.setItem("cognitoToken", session.getIdToken().getJwtToken());
        setLoading(false);
        navigate("/main");
      },
      onFailure: err => {
        setError(err.message || "Login failed");
        setLoading(false);
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-xl shadow p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="w-full border rounded px-4 py-2 mb-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          className="w-full border rounded px-4 py-2 mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;