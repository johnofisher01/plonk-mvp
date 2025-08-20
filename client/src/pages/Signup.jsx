import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { awsConfig } from "../awsConfig";

const poolData = {
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId
};
const userPool = new CognitoUserPool(poolData);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !firstName || !surname || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    userPool.signUp(
      email,
      password,
      [
        { Name: "email", Value: email },
        { Name: "name", Value: `${firstName} ${surname}` },
        { Name: "given_name", Value: firstName },
        { Name: "family_name", Value: surname }
      ],
      null,
      (err, result) => {
        setLoading(false);
        if (err) {
          setError(err.message || "Sign up failed.");
        } else {
          setSuccess(true);
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Create Account</h2>
        <input
          className="w-full border rounded px-4 py-2 mb-2"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <input
          className="w-full border rounded px-4 py-2 mb-2"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <input
          className="w-full border rounded px-4 py-2 mb-2"
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          required
        />
        <div className="relative">
          <input
            className="w-full border rounded px-4 py-2 mb-2"
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div className="relative">
          <input
            className="w-full border rounded px-4 py-2 mb-2"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
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
            Show passwords
          </label>
        </div>
        {error && (
          <div className="text-red-500 mb-2 border border-red-200 rounded p-2 bg-red-50">
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-500 mb-2 border border-green-200 rounded p-2 bg-green-50">
            Account created! Please check your email for a verification code.<br />
            <a href="/verify" className="text-blue-600 underline font-semibold">Click here to verify your account</a>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Create Account"}
        </button>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline font-semibold">
            Back to Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;