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
    <nav className="w-full bg-gradient-to-r from-indigo-700 via-blue-500 to-teal-400 text-white px-4 py-3 flex justify-between items-center shadow-xl">
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`font-semibold px-4 py-2 rounded-xl transition ${
              location.pathname === link.to
                ? "bg-white text-blue-700 shadow"
                : "hover:bg-teal-600 hover:text-white"
            }`}
            style={{ fontSize: "1.1rem" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default MenuBar;