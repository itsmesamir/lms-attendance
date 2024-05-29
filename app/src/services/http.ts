import axios from "axios";
import config from "../config";

const http = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
});

http.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default http;
