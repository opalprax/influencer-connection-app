import axios from 'axios';
import { Influencer, Project, QueryAnalysis } from '../types/types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const influencerApi = {
  search: async (analysis: QueryAnalysis): Promise<Influencer[]> => {
    const { data } = await api.post('/influencers/search', analysis);
    return data;
  },

  getProfile: async (id: string): Promise<Influencer> => {
    const { data } = await api.get(`/influencers/${id}`);
    return data;
  }
};

export const projectApi = {
  create: async (projectData: Partial<Project>): Promise<Project> => {
    const { data } = await api.post('/projects', projectData);
    return data;
  },

  update: async (id: string, updates: Partial<Project>): Promise<Project> => {
    const { data } = await api.patch(`/projects/${id}`, updates);
    return data;
  }
}; 