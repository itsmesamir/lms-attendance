import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "./context/AuthContext";

const PrivateWrapper = ({ children }: any) => {
  const { isAuthenticated } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default PrivateWrapper;
