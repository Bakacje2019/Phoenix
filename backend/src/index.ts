import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import dotenv from 'dotenv';
import { connectDatabases } from './config/database';
import chatRoutes from './routes/chat';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
  },
});

// Basic middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/chat', chatRoutes);
app.use('/api/auth', authRoutes);

// WebSocket handler for real‑time chat
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
  socket.on('message', (msg) => {
    // For now, just echo messages back to the client.
    socket.emit('response', msg);
  });
});

// Connect to databases
connectDatabases().catch((err) => {
  console.error('Database connection failed:', err);
});

// Start server
const port = process.env.PORT || 4000;
httpServer.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});