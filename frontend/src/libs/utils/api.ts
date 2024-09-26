"use client";
import config from "@/config/config";
import axios from "axios";

const instance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const instanceWithAuth = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      typeof window !== "undefined" && localStorage.getItem("token"),
  },
});

export const get = (url: string, withAuth = false) => {
  let headers = {};

  if (withAuth) {
    headers = { Authorization: localStorage.getItem("token") };
  }

  return instance.get(url, { headers: headers }).then((res) => {
    if (!res.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export const post = (url: string, body: any, withAuth = false) => {
  let headers = {};

  if (withAuth) {
    headers = { Authorization: localStorage.getItem("token") };
  }

  return instance.post(url, body, { headers: headers }).then((res) => {
    if (!res.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export default instance;
