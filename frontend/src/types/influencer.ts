export interface Category {
  name: string;
  color: string;
}

export interface SocialStats {
  followers: number;
  engagement: number;
  rating: number;
}

export interface Influencer {
  id: string;
  name: string;
  imageUrl: string;
  categories: Category[];
  followers: number;
  engagementRate: number;
  rating: number;
  platforms: {
    platform: string;
    handle: string;
    followers: number;
  }[];
  location: string;
  bio: string;
  recentPosts?: {
    thumbnail: string;
    likes: number;
    comments: number;
  }[];
}

export interface SearchFilters {
  category?: string;
  platform?: string;
  minFollowers?: number;
  minEngagement?: number;
} 