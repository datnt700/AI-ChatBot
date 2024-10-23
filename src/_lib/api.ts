// lib/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async () => {
  const response = await apiClient.get('/data-endpoint'); // Replace with actual endpoint
  return response.data;
};
