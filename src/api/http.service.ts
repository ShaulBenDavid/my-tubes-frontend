import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const config: AxiosRequestConfig = {
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const dwInstance: AxiosInstance = applyCaseMiddleware(
  axios.create(config),
);

export const apiMethodInstance = <T>(options: AxiosRequestConfig): Promise<T> =>
  dwInstance(options).then((res) => res.data);

const refreshConfig: AxiosRequestConfig = {
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const refreshInstance: AxiosInstance = applyCaseMiddleware(
  axios.create(refreshConfig),
);

export const refreshMethodInstance = <T>(
  options: AxiosRequestConfig,
): Promise<T> => refreshInstance(options).then((res) => res.data);
