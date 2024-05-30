import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useAuthProvider } from "./context/AuthContext";

const PrivateWrapper = ({ children }: any) => {
  // const { isAuthenticated } = useAuth();
  const { isAuthenticated, setIsAuthenticated } = useAuthProvider();
  console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default PrivateWrapper;
