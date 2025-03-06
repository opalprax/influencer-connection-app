import { useState } from 'react';
import OpenAI from 'openai';

export const useAI = () => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const analyzeQuery = async (query: string) => {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Analyze the content requirements and extract key parameters."
        },
        {
          role: "user",
          content: query
        }
      ],
      model: "gpt-4-turbo-preview",
    });

    return {
      contentType: completion.choices[0].message.content,
      budget: extractBudget(query),
      requirements: extractRequirements(query),
      targetAudience: extractTargetAudience(query)
    };
  };

  const getRecommendations = async (analysis: QueryAnalysis) => {
    // Use TensorFlow.js for recommendation scoring
    const model = await tf.loadLayersModel('/models/influencer-recommender');
    
    // Get initial matches from MongoDB
    const matches = await fetchInitialMatches(analysis);
    
    // Score matches using the ML model
    const scoredMatches = matches.map(match => ({
      ...match,
      aiMatchScore: calculateMatchScore(match, analysis, model)
    }));

    return scoredMatches.sort((a, b) => b.aiMatchScore - a.aiMatchScore);
  };

  return { analyzeQuery, getRecommendations };
}; 