import axios from 'axios';
import { Influencer, SearchFilters } from '../types/influencer';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

interface SearchParams {
  query: string;
  filters: SearchFilters;
}

export const influencerApi = {
  search: async (params: SearchParams): Promise<Influencer[]> => {
    const { data } = await api.post<Influencer[]>('/influencers/search', params);
    return data;
  },

  getProfile: async (id: string): Promise<Influencer> => {
    const { data } = await api.get<Influencer>(`/influencers/${id}`);
    return data;
  }
}; 