import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, loginHandler, logoutHandler } =
    useAuthProvider();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    logoutHandler();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      {isAuthenticated.toString()}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">Leave Management System</Link>
        </div>
        <div>
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Dashboard
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
