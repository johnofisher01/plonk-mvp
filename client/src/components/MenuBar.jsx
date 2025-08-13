import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { label: "Menu", to: "/main" },
  { label: "Feature 4", to: "/feature4" },
  { label: "Calendar", to: "/calendar" },
];

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cognitoUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-800 text-white px-4 py-3 flex justify-center gap-6 shadow">
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`font-semibold px-2 py-1 rounded hover:bg-gray-600 transition ${
            location.pathname === link.to ? "bg-gray-700" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
      {cognitoUser ? (
        <button
          onClick={handleLogout}
          className="ml-4 px-4 py-1 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="ml-4 px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default MenuBar;