// services/api.ts
import axios from 'axios';
import { Pin } from '../types/PinTypes';

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY; 

export const fetchImages = async (query: string, page: number = 1, perPage: number = 15): Promise<Pin[]> => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query,
        page,
        per_page: perPage,
      },
    });

    return response.data.photos; // Extract the photos array from the response
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};