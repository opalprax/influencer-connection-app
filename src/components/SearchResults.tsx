import React from 'react';
import styled from 'styled-components';

const ResultCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const MetricCard = styled.div`
  text-align: center;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const SearchResults: React.FC<{ results: Influencer[] }> = ({ results }) => {
  return (
    <div>
      {results.map((influencer) => (
        <ResultCard key={influencer.id}>
          <div className="profile-header">
            <img src={influencer.profileImage} alt={influencer.name} />
            <h3>{influencer.name}</h3>
            <div className="match-score">
              {Math.round(influencer.aiMatchScore * 100)}% Match
            </div>
          </div>
          
          <MetricsGrid>
            <MetricCard>
              <h4>Followers</h4>
              <p>{formatNumber(influencer.metrics.followers)}</p>
            </MetricCard>
            <MetricCard>
              <h4>Engagement</h4>
              <p>{influencer.metrics.engagement}%</p>
            </MetricCard>
            <MetricCard>
              <h4>Content Quality</h4>
              <p>{influencer.metrics.contentQuality}/10</p>
            </MetricCard>
            <MetricCard>
              <h4>Response Rate</h4>
              <p>{influencer.metrics.responseRate}%</p>
            </MetricCard>
            <MetricCard>
              <h4>Satisfaction</h4>
              <p>{influencer.metrics.satisfaction}/5</p>
            </MetricCard>
          </MetricsGrid>
          
          <Button onClick={() => handleContact(influencer.id)}>
            Contact Influencer
          </Button>
        </ResultCard>
      ))}
    </div>
  );
}; 