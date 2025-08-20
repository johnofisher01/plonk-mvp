import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Plonk!</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm mb-8">
        <button
          className="py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/calendar")}
        >
          Calendar
        </button>
        <button
          className="py-3 rounded-xl bg-green-600 text-white font-bold shadow hover:bg-green-700 transition"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
        <button
          className="py-3 rounded-xl bg-yellow-600 text-white font-bold shadow hover:bg-yellow-700 transition"
          onClick={() => navigate("/bookings")}
        >
          Bookings
        </button>
        <button
          className="py-3 rounded-xl bg-gray-600 text-white font-bold shadow hover:bg-gray-700 transition"
          onClick={() => navigate("/settings")}
        >
          Settings
        </button>
      </div>
      <button
        className="py-2 px-6 rounded-xl bg-red-600 text-white font-bold shadow hover:bg-red-700 transition"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Main;