# Thinkboard - Notes Management App

Thinkboard is a full-stack notes management application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete notes with ease. The application features a responsive UI, real-time notifications, and rate limiting for API protection.

## Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Display all notes in a responsive grid layout, sorted by creation date
- **Edit Notes**: Update existing notes inline
- **Delete Notes**: Remove notes with confirmation
- **Rate Limiting**: API protected with Upstash Redis rate limiting (100 requests per 60 seconds)
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS and DaisyUI
- **Real-time Notifications**: Toast notifications for user feedback
- **RESTful API**: Backend API with proper error handling and status codes

## Tech Stack

### Backend (Server)
- **Node.js** with **Express.js** for the web framework
- **MongoDB** with **Mongoose** for data modeling
- **Upstash Redis** for rate limiting
- **dotenv** for environment variable management
- **nodemon** for development auto-restart
- ES modules for modern JavaScript

### Frontend (Client)
- **React** with **Vite** for fast development and building
- **Tailwind CSS** and **DaisyUI** for styling and components
- **React Router** for client-side routing
- **Axios** for API requests
- **React Hot Toast** for notifications
- **Lucide React** for icons

## Project Structure

```
thinkboard/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities (axios config)
│   ├── package.json
│   └── vite.config.js
├── server/          # Node.js backend
│   ├── src/
│   │   ├── config/      # Database and Redis config
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/   # Rate limiting middleware
│   │   ├── models/       # Mongoose models
│   │   └── routes/       # API routes
│   ├── package.json
│   └── server.js
└── README.md
```

## Backend (Server)

### API Endpoints

- `GET /api/notes` - Get all notes (sorted by creation date descending)
- `GET /api/notes/:id` - Get a single note by ID
- `POST /api/notes` - Create a new note (requires title and content)
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

### Environment Variables (Server)

Create a `.env` file in the `server` directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

### Setup and Running (Backend)

1. Navigate to the `server` directory
2. Install dependencies: `npm install`
3. Create `.env` file with required variables
4. Start the server: `npm run dev` (development) or `npm start` (production)

The server runs on `http://localhost:8000` by default.

## Frontend (Client)

### Pages

- **Home (/)**: Displays all notes in a grid, handles loading states and rate limiting
- **Create (/create)**: Form to create new notes with validation
- **Note Detail (/note/:id)**: View and edit individual notes, delete functionality

### Components

- **Navbar**: Navigation header with link to create page
- **NoteCard**: Displays note preview with title and content snippet
- **NotesNotFound**: Empty state when no notes exist
- **RateLimit**: Display when API rate limit is exceeded

### Setup and Running (Frontend)

1. Navigate to the `client` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The client runs on `http://localhost:5173` and proxies API requests to the backend.

## Development

### Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud instance)
- Upstash Redis account for rate limiting

### Running the Full Application

1. Start the backend server (follow backend setup)
2. Start the frontend client (follow frontend setup)
3. Open `http://localhost:5173` in your browser

### Building for Production

1. Build the frontend: `cd client && npm run build`
2. The built files will be in `client/dist/`
3. Serve the backend and frontend together (backend can serve static files or use a reverse proxy)

## Notes

- The application uses ES modules throughout
- API requests include proper error handling and loading states
- Rate limiting prevents abuse but allows normal usage
- The UI is fully responsive and works on mobile devices
- MongoDB connection is required for data persistence

## Author

Ashim Raj

---

This README provides a comprehensive overview of the Thinkboard application, including setup instructions, features, and technical details for both frontend and backend components.
