interface Influencer {
  id: string;
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
  portfolio: Portfolio[];
  aiMatchScore?: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  projectHistory: Project[];
  preferences: {
    contentTypes: string[];
    budget: {
      min: number;
      max: number;
    };
    preferredPlatforms: string[];
  };
}

interface Project {
  id: string;
  customerId: string;
  influencerId: string;
  status: 'draft' | 'pending' | 'accepted' | 'in-progress' | 'completed';
  brief: ContentBrief;
  payment: PaymentDetails;
  deliverables: Deliverable[];
  timeline: Timeline;
}

interface Portfolio {
  id: string;
  title: string;
  description: string;
  mediaUrls: string[];
  metrics: {
    views: number;
    engagement: number;
    conversions?: number;
  };
  platform: string;
  createdAt: Date;
}

interface ContentBrief {
  title: string;
  description: string;
  goals: string[];
  targetAudience: {
    demographics: string[];
    interests: string[];
    location?: string[];
  };
  budget: number;
  timeline: string;
  requirements: string[];
  references?: string[];
}

interface PaymentDetails {
  amount: number;
  currency: string;
  status: 'pending' | 'held' | 'released' | 'refunded';
  stripePaymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Deliverable {
  id: string;
  type: 'video' | 'post' | 'story' | 'reel' | 'article';
  status: 'pending' | 'in-progress' | 'review' | 'approved' | 'rejected';
  content?: string;
  mediaUrls?: string[];
  feedback?: string[];
  dueDate: Date;
}

interface Timeline {
  startDate: Date;
  endDate: Date;
  milestones: {
    date: Date;
    description: string;
    status: 'pending' | 'completed';
  }[];
}

interface QueryAnalysis {
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