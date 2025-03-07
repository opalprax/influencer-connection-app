import React, { useState } from 'react';
import { Box, Container, Heading, useToast } from '@chakra-ui/react';
import InfluencerSearch from '../components/InfluencerSearch';
import InfluencerList from '../components/InfluencerList';
import { Influencer, SearchFilters } from '../types/influencer';
import { influencerApi } from '../services/api';

// Mock data for demonstration and fallback
const mockInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: [{ name: 'Fashion', color: 'pink.400' }],
    platforms: [
      { platform: 'Instagram', handle: '@sarahjohnson', followers: 150000 }
    ],
    followers: 150000,
    engagementRate: 3.5,
    rating: 4.8,
    location: 'New York, USA',
    bio: 'Fashion and lifestyle content creator passionate about sustainable fashion',
    recentPosts: [
      { thumbnail: 'https://example.com/post1.jpg', likes: 5000, comments: 100 }
    ]
  },
  {
    id: '2',
    name: 'Mike Chen',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: [{ name: 'Tech', color: 'blue.400' }],
    platforms: [
      { platform: 'YouTube', handle: '@mikechen', followers: 500000 }
    ],
    followers: 500000,
    engagementRate: 4.2,
    rating: 4.6,
    location: 'San Francisco, USA',
    bio: 'Tech reviewer and gadget enthusiast',
    recentPosts: [
      { thumbnail: 'https://example.com/post2.jpg', likes: 15000, comments: 300 }
    ]
  },
  {
    id: '3',
    name: 'Emma Davis',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: [{ name: 'Lifestyle', color: 'purple.400' }],
    platforms: [
      { platform: 'Instagram', handle: '@emmadavis', followers: 200000 }
    ],
    followers: 200000,
    engagementRate: 5.0,
    rating: 4.9,
    location: 'London, UK',
    bio: 'Lifestyle blogger sharing daily inspiration',
    recentPosts: [
      { thumbnail: 'https://example.com/post3.jpg', likes: 8000, comments: 200 }
    ]
  }
];

function Search() {
  const [searchResults, setSearchResults] = useState<Influencer[]>(mockInfluencers);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSearch = async (query: string, filters: SearchFilters) => {
    setIsLoading(true);
    try {
      // Try AI-powered search first
      const aiResults = await influencerApi.search({
        query,
        filters
      });
      setSearchResults(aiResults);
    } catch (error) {
      // Fall back to local search if API fails
      console.log('Falling back to local search:', error);
      const filteredInfluencers = mockInfluencers.filter((influencer) => {
        const matchesQuery = query === '' || 
          influencer.name.toLowerCase().includes(query.toLowerCase()) ||
          influencer.categories.some(cat => cat.name.toLowerCase().includes(query.toLowerCase())) ||
          influencer.bio.toLowerCase().includes(query.toLowerCase());
        
        const matchesCategory = !filters.category || filters.category === 'all' || 
          influencer.categories.some(cat => 
            cat.name.toLowerCase() === (filters.category || '').toLowerCase()
          );
        
        const matchesPlatform = !filters.platform || filters.platform === 'all' || 
          influencer.platforms.some(p => 
            p.platform.toLowerCase() === (filters.platform || '').toLowerCase()
          );

        const matchesFollowers = !filters.minFollowers || 
          influencer.followers >= filters.minFollowers;

        const matchesEngagement = !filters.minEngagement || 
          influencer.engagementRate >= filters.minEngagement;

        return matchesQuery && matchesCategory && matchesPlatform && 
               matchesFollowers && matchesEngagement;
      });

      setSearchResults(filteredInfluencers);
      toast({
        title: 'Using local search',
        description: 'Could not connect to AI search. Using basic search instead.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={8}>
          Search Influencers
        </Heading>
        <InfluencerSearch onSearch={handleSearch} isLoading={isLoading} />
        <InfluencerList influencers={searchResults} />
      </Box>
    </Container>
  );
}

export default Search; 