import axios from 'axios';

export default defineNuxtPlugin(() => {
    const axiosInstance = axios.create({
        baseURL: process.env.BACKEND_URL || 'http://localhost:3000',
        withCredentials: false,
    });
    axiosInstance.interceptors.request.use(config => {
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    });

    return {
        provide: { axios: axiosInstance },
    };
});