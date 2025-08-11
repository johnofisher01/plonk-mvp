import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Menu", to: "/main" },
  { label: "Feature 4", to: "/feature4" },
  { label: "Calendar", to: "/calendar" },
];

const MenuBar = () => {
  const location = useLocation();
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
    </nav>
  );
};

export default MenuBar;