import { Server } from 'socket.io';

const initializeSocket = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: 'http://localhost:5173', 
            methods: ['GET', 'POST'],        
            credentials: true,               
        },
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('message', (data) => {
            console.log(`Message from client ${socket.id}:`, data);
            io.emit('message', data);
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

export default initializeSocket;
