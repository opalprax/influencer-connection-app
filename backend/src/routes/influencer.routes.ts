import express from 'express';
import { getInfluencers, createInfluencer, updateInfluencer, deleteInfluencer } from '../controllers/influencer.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Get all influencers
router.get('/', authenticate, getInfluencers);

// Create a new influencer
router.post('/', authenticate, createInfluencer);

// Update an influencer
router.put('/:id', authenticate, updateInfluencer);

// Delete an influencer
router.delete('/:id', authenticate, deleteInfluencer);

export default router; 