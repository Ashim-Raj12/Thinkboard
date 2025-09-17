# Thinkboard - Notes Management App

Thinkboard is a simple and efficient notes management application built with a MERN stack backend. It allows users to create, read, update, and delete notes with ease.

## Features

- Create new notes with a title and content
- View all notes sorted by creation date (most recent first)
- Update existing notes
- Delete notes
- RESTful API backend built with Express and MongoDB
- Rate limiting to prevent abuse using Upstash Redis

## Backend (Server)

The backend is built using Node.js, Express, and MongoDB with Mongoose for data modeling. It uses ES modules for modern JavaScript syntax.

### Key Technologies

- Express: Web framework for Node.js
- MongoDB: NoSQL database for storing notes
- Mongoose: ODM for MongoDB
- dotenv: Environment variable management
- nodemon: Development utility for automatic server restarts
- Upstash Redis: Cloud Redis service used for rate limiting
- @upstash/ratelimit: Rate limiting middleware integrated with Upstash Redis

### API Endpoints

- `GET /api/notes` - Get all notes  
  Response: 200 OK, JSON array of notes sorted by creation date descending

- `GET /api/notes/:id` - Get a single note by ID  
  Response: 200 OK with note JSON if found, 404 Not Found if no note with given ID

- `POST /api/notes` - Create a new note  
  Request body: JSON with `title` (string) and `content` (string)  
  Response: 201 Created with created note JSON

- `PUT /api/notes/:id` - Update a note by ID  
  Request body: JSON with `title` (string) and `content` (string)  
  Response: 200 OK with updated note JSON if found, 404 Not Found if no note with given ID

- `DELETE /api/notes/:id` - Delete a note by ID  
  Response: 200 OK with success message if deleted, 404 Not Found if no note with given ID

### Rate Limiting

To prevent abuse, the server uses rate limiting middleware powered by Upstash Redis. The limit is set to 100 requests per 60 seconds per client. If the limit is exceeded, the server responds with HTTP 429 Too Many Requests.

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

The Redis variables are required for the rate limiting middleware to connect to Upstash Redis.

### Setup and Running

1. Clone the repository  
2. Navigate to the `server` directory  
3. Install dependencies:  
   ```
   npm install
   ```  
4. Create a `.env` file with the environment variables as described above  
5. Start the server:  
   ```
   npm start
   ```  
   or for development with automatic restarts:  
   ```
   npm run dev
   ```  

The server will run on `http://localhost:5000` by default.

## Notes

- Make sure MongoDB is running and accessible via the connection string provided in `.env`.  
- The API returns JSON responses and expects JSON request bodies for POST and PUT requests.  
- The server uses ES modules, so ensure your environment supports this or use Node.js version 14+.

## Author

Ashim Raj

---

This README provides an overview of the Thinkboard backend server, its features, setup instructions, API endpoints, and rate limiting details to help you get started quickly.
