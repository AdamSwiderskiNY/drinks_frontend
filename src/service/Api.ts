import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const BASE_URL = `http://localhost:8080`;

export const baseInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

baseInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
        console.log(config);
        if (localStorage.getItem("accessToken") !== "" && config.url !== "/login") {
            config.headers.Authorization = `Basic ${localStorage.getItem("accessToken")}`;
        }
        return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
)