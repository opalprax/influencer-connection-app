export interface Influencer {
  _id: string;
  name: string;
  profileImage: string;
  socialMediaHandles: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    twitter?: string;
  };
  categories: string[];
  metrics: {
    followers: number;
    engagement: number;
    contentQuality: number;
    responseRate: number;
    satisfaction: number;
  };
  pricing: {
    basePrice: number;
    currency: string;
  };
  availability: boolean;
  aiMatchScore?: number;
}

export interface SearchQuery {
  contentType: string;
  budget: {
    min: number;
    max: number;
  };
  requirements: string[];
  targetAudience: {
    demographics?: string[];
    interests?: string[];
    location?: string[];
  };
} 