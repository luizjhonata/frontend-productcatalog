import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

export const Api = axios.create({
    // baseURL: "http://localhost:8080", // use that in local tests
    baseURL: "https://productcatalog-product-catalog.up.railway.app",
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = user?.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);