import { QueryAnalysis } from '../types/types';

export const extractBudget = (query: string): { min: number; max: number } => {
  const budgetRegex = /\$(\d+)(?:\s*-\s*\$?(\d+))?/;
  const match = query.match(budgetRegex);
  
  if (match) {
    const min = parseInt(match[1]);
    const max = match[2] ? parseInt(match[2]) : min + (min * 0.5);
    return { min, max };
  }
  
  return { min: 0, max: 0 };
};

export const extractRequirements = (query: string): string[] => {
  // Basic requirement extraction logic
  const requirements = query
    .toLowerCase()
    .split(/[.,!?]/)
    .filter(req => req.includes('need') || req.includes('require') || req.includes('must'))
    .map(req => req.trim());
  
  return requirements;
};

export const extractTargetAudience = (query: string): {
  demographics?: string[];
  interests?: string[];
  location?: string[];
} => {
  // Basic audience extraction logic
  const demographics = query.match(/targeting\s([^.!?,]*)/i)?.[1].split(',').map(d => d.trim()) || [];
  
  return {
    demographics,
    interests: [],
    location: []
  };
}; 