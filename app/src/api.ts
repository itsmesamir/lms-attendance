import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURI,
  withCredentials: true,
});

// Add a request interceptor to include tokens in headers
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refreshToken");
        const response = await axios.post(
          "/api/refresh-token",
          { token: refreshToken },
          { withCredentials: true }
        );
        Cookies.set("accessToken", response.data.accessToken);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

// HTTP GET request
export const get = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.get(url, config);
};

// HTTP POST request
export const post = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.post(url, data, config);
};

// HTTP PUT request
export const put = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.put(url, data, config);
};

// HTTP PATCH request
export const patch = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.patch(url, data, config);
};

// HTTP DELETE request
export const remove = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.delete(url, config);
};

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("API Error:", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Request setup error:", error.message);
  }
};

export default api;
