# Thinkboard - Notes Management App

Thinkboard is a simple and efficient notes management application built with a MERN stack backend. It allows users to create, read, update, and delete notes with ease.

## Features

- Create new notes with a title and content
- View all notes sorted by creation date (most recent first)
- Update existing notes
- Delete notes
- RESTful API backend built with Express and MongoDB

## Backend (Server)

The backend is built using Node.js, Express, and MongoDB with Mongoose for data modeling.

### Key Technologies

- Express: Web framework for Node.js
- MongoDB: NoSQL database for storing notes
- Mongoose: ODM for MongoDB
- dotenv: Environment variable management
- nodemon: Development utility for automatic server restarts

### API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a single note by ID
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

### Setup and Running

1. Clone the repository
2. Navigate to the `server` directory
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the `server` directory with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
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

## Author

Ashim Raj

---

This README provides an overview of the Thinkboard backend server, its features, setup instructions, and API endpoints to help you get started quickly.
