import React, { useState } from "react";
import {
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showNewPasswordFields, setShowNewPasswordFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, userPool } = useAuth();

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
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
      onSuccess: (session) => {
        login(cognitoUser, session);
        setLoading(false);
        navigate("/main");
      },
      onFailure: (err) => {
        setError(err.message || "Login failed. Please check your credentials.");
        setLoading(false);
      },
      newPasswordRequired: () => {
        setShowNewPasswordFields(true);
        setLoading(false);
        setError("Your account requires a password change. Please set a new password and enter your full name.");
      }
    });
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword || !name) {
      setError("Please fill out all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }
    setLoading(true);

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    const attributes = { name };

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (session) => {
        login(cognitoUser, session);
        setLoading(false);
        navigate("/main");
      },
      onFailure: (err) => {
        setError(err.message || "Login failed. Please check your credentials.");
        setLoading(false);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        cognitoUser.completeNewPasswordChallenge(
          newPassword,
          attributes,
          {
            onSuccess: (session) => {
              login(cognitoUser, session);
              setLoading(false);
              navigate("/main");
            },
            onFailure: (err) => {
              setError(err.message || "Password change failed. Please try again.");
              setLoading(false);
            },
          }
        );
      },
    });
  };

  const handleBackToLogin = () => {
    setShowNewPasswordFields(false);
    setNewPassword("");
    setConfirmPassword("");
    setName("");
    setError("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {!showNewPasswordFields ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <input
            className="w-full border rounded px-4 py-2 mb-2"
            type="text"
            placeholder="Email address"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
          <div className="relative">
            <input
              className="w-full border rounded px-4 py-2 mb-2"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Show password
            </label>
          </div>
          {error && (
            <div className="text-red-500 mb-2 border border-red-200 rounded p-2 bg-red-50">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="mt-4 text-center">
            <a href="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign Up to Plonk
            </a>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleNewPasswordSubmit}
          className="bg-white rounded-xl shadow p-6 w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4">Change Password & Set Name</h2>
          <input
            className="w-full border rounded px-4 py-2 mb-2"
            type="text"
            placeholder="Email address"
            value={username}
            disabled
          />
          <div className="relative">
            <input
              className="w-full border rounded px-4 py-2 mb-2"
              type={showPassword ? "text" : "password"}
              placeholder="Old Password"
              value={password}
              disabled
            />
          </div>
          <input
            className="w-full border rounded px-4 py-2 mb-2"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <small className="text-gray-500 mb-2 block">
            Please enter your real name as you would like it to appear in the system.
          </small>
          <div className="relative">
            <input
              className="w-full border rounded px-4 py-2 mb-2"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="relative">
            <input
              className="w-full border rounded px-4 py-2 mb-2"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <input
              id="showPassword2"
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="showPassword2" className="text-sm text-gray-700">
              Show passwords
            </label>
          </div>
          {error && (
            <div className="text-red-500 mb-2 border border-red-200 rounded p-2 bg-red-50">
              {error}
            </div>
          )}
          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Changing..." : "Change Password"}
            </button>
            <button
              type="button"
              className="flex-1 py-3 rounded-xl bg-gray-300 text-gray-700 font-bold shadow hover:bg-gray-400 transition"
              onClick={handleBackToLogin}
              disabled={loading}
            >
              Back to Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;