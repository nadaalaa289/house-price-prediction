import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const predictPrice = async (data: any) => {
    const response = await apiClient.post('/predict', data);
    return response.data;
};

export const healthCheck = async () => {
    const response = await apiClient.get('/health');
    return response.data;
};