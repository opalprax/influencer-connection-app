import React, { useState, useEffect } from 'react';
import { useAI } from '../hooks/useAI';
import { SearchResults } from './SearchResults';
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SearchInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #2196f3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
  }
`;

const SearchInfluencers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Influencer[]>([]);
  const { analyzeQuery, getRecommendations } = useAI();

  const handleSearch = async () => {
    const queryAnalysis = await analyzeQuery(searchQuery);
    const recommendations = await getRecommendations(queryAnalysis);
    setResults(recommendations);
  };

  return (
    <SearchContainer>
      <h1>Find the Perfect Influencer for Your Content</h1>
      <SearchInput
        placeholder="Describe your content needs in detail (e.g., 'Looking for a tech influencer to create engaging video content about AI tools, budget $500-1000, targeting young professionals')"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Find Matches</Button>
      <SearchResults results={results} />
    </SearchContainer>
  );
};

export default SearchInfluencers; 