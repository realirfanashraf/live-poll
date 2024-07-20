import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import morgan from 'morgan';
import nocache from 'nocache';
import cors from 'cors';
import { connectDB } from './server/connection/database.js';
import initializeSocket from './socket.js';
import authRoute from './server/routes/authRoutes.js';

// Initialize dotenv
dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(nocache());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoute);

// Connect to the database
connectDB();

// Initialize Socket.IO
initializeSocket(server);

// Server startup
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
