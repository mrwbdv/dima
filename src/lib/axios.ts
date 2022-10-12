import axios from 'axios';

export const baseUrl = _DEV_
    ? process.env.DEV_BASE_URL || '/tp-local-api'
    : process.env.API_URL;

export const baseAxios = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});

export const setupAxios = () => {
    baseAxios.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            return Promise.reject(error);
        }
    );
};
