"use client";
import config from "@/config/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const axiosInstanceWithAuth = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosInstanceWithAuth.interceptors.request.use(
  (x) => {
    const token = localStorage.getItem(config.LOCAL_STORAGE.TOKEN);

    if (token) {
      x.headers["Authorization"] = `Bearer ${token}`;
    }

    return x;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstanceWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
