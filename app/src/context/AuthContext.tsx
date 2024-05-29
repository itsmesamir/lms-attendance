import React, { createContext, useState, useEffect } from "react";
import axios from "../services/http";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/auth/status");
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await axios.post("/auth/login", { email, password });
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
