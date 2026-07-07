import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('admin_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('admin_token');
        }

        // Extrai a mensagem de validação do NestJS, se existir
        if (error.response?.data?.message) {
            const nestMessage = error.response.data.message;
            error.message = Array.isArray(nestMessage) 
                ? nestMessage.join(', ') 
                : nestMessage;
        }

        return Promise.reject(error);
    }
);

export default api;