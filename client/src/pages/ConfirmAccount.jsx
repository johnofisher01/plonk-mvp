import React, { useState } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { awsConfig } from "../awsConfig";
import { useNavigate } from "react-router-dom";

const poolData = {
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId
};
const userPool = new CognitoUserPool(poolData);

const ConfirmAccount = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !code) {
      setError("Please enter your email and the verification code.");
      return;
    }

    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        setError(err.message || "Verification failed.");
      } else {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Verify Your Email</h2>
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
          placeholder="Verification Code"
          value={code}
          onChange={e => setCode(e.target.value)}
          required
        />
        {error && (
          <div className="text-red-500 mb-2 border border-red-200 rounded p-2 bg-red-50">
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-500 mb-2 border border-green-200 rounded p-2 bg-green-50">
            Success! Redirecting to login...
          </div>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
        >
          Verify
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

export default ConfirmAccount;