import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Adjust the URL based on your backend server

export const register = async (userData: any) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (credentials: any) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const fetchUserProfile = async (token: string) => {
  return axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const refreshToken = async () => {
  return axios.post(`${API_URL}/token`, {}, { withCredentials: true });
};
