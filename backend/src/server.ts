// Add immediate console output
console.log('Script starting...');

import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
console.log('Express app created...');

const port = process.env.PORT || 5000;
console.log('Port defined...');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/influencer_db';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Influencer Connection API' });
});

console.log('About to start server...');

const server = app.listen(port, () => {
  console.log('=================================');
  console.log(`Server is running on port ${port}`);
  console.log(`Try opening: http://localhost:${port}`);
  console.log('=================================');
});

server.on('error', (error: any) => {
  console.error('Server error:', error);
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});