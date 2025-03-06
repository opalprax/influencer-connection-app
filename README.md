# Influencer Connection Platform

A full-stack application for connecting brands with social media influencers.

## Tech Stack

- Frontend: React with TypeScript, Material-UI
- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB
- Containerization: Docker

## Project Structure

```
.
├── frontend/         # React frontend application
├── backend/          # Express.js backend API
└── docker-compose.yml # Docker compose configuration
```

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd influencer-connection
   ```

2. Start the application using Docker:
   ```bash
   docker-compose up -d
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## Development

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Features

- User authentication (Login/Register)
- Influencer profile management
- Search functionality
- Brand-Influencer connection system

## License

MIT 