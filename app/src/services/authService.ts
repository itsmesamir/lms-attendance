import http from "./http";

export const register = (userData: any) => {
  return http.post("/auth/register", userData);
};

export const login = (credentials: any) => {
  return http.post("/auth/login", credentials);
};

export const fetchUserByToken = () => {
  return http.get("/auth/me");
};
