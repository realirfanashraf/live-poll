import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import morgan from 'morgan';
import nocache from 'nocache';
import cors from 'cors';
import { connectDB } from './server/connection/database.js';
import initializeSocket from './socket.js';

// Initialize dotenv
dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware for CORS
app.use(cors({
  origin: 'http://localhost:5173/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for caching and logging
app.use(nocache());
app.use(morgan('dev'));


// Route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Connect to the database
connectDB();

// Initialize Socket.IO
initializeSocket(server);

// Server startup
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
