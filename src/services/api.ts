import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

// export const urlApi = `http://localhost:8080`;
export const urlApi = `https://productcatalog-product-catalog.up.railway.app`;

export const Api = axios.create({
    baseURL: `${urlApi}`,
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