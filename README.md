# Kanban Board with JWT Authentication

A secure Kanban board application with JWT authentication for managing work tasks.

## Features

- Secure login with JWT authentication
- Kanban board with three columns (Todo, In Progress, Done)
- Create, read, update, and delete tickets
- Assign tickets to users
- Session timeout for security

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory based on `.env.example`
   - Set a secure JWT_SECRET for production use

4. Set up the database:
   ```
   cd server
   npm run build
   npm run seed
   ```

5. Start the application:
   ```
   npm run start:dev
   ```

## JWT Authentication

This application uses JSON Web Tokens (JWT) for authentication:

1. When a user logs in with valid credentials, the server generates a JWT
2. The token is stored in the client's localStorage
3. The token is included in the Authorization header for API requests
4. The server validates the token for protected routes
5. The token expires after a set time (1 hour by default)
6. User sessions also timeout after 15 minutes of inactivity

## Default Users

The seed data creates the following users (all with password: "password"):

- Username: JollyGuru
- Username: SunnyScribe
- Username: RadiantComet

## Security Features

- Password hashing with bcrypt
- JWT token expiration
- Session timeout for inactive users
- Protected routes requiring aut