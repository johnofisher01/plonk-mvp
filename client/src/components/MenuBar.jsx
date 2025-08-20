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
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-800 text-white px-4 py-3 flex justify-between items-center shadow">
      <div className="flex gap-6">
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
      </div>
      <button
        onClick={handleLogout}
        className="bg-gray-700 hover:bg-gray-900 text-white font-bold px-4 py-2 rounded transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default MenuBar;