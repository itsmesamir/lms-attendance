// useAuth.tsx
import { useAuthProvider } from "../context/AuthContext";
import * as api from "../api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import config from "../config";
import { useEffect } from "react";

const useAuth = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthProvider();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      Cookies.set("accessToken", response.data.accessToken);
      Cookies.set("refreshToken", response.data.refreshToken);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (userData: UserData) => {
    const url = config.baseURI + "/register";
    try {
      await api.post(url, { ...userData });
      navigate("/login");
    } catch (error) {
      console.error(error);
      api.handleApiError(error as any);
    }
  };

  const logout = async () => {
    try {
      await api.post("/logout");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error(error);
      return;
    } finally {
      console.log("Logged out successfully");
      console.log("Cookies removed", isAuthenticated);
    }
  };

  useEffect(() => {
    console.log("isAuthenticateddddd", isAuthenticated);
  }, [isAuthenticated]);

  return { isAuthenticated, login, register, logout };
};

export default useAuth;
