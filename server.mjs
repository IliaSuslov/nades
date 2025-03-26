import { createServer } from 'node:http';
import next from 'next';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();
let activeConnections = 0;

app.prepare().then(() => {
    const server = createServer(handler);

    const io = new Server(server, {
        cors: {
            origin: dev ? '*' : 'https://nades.onrender.com',
            methods: ['GET', 'POST'],
        },
        transports: ['websocket', 'polling'],
    });

    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);
        activeConnections++;
        broadcastActiveConnections();

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
            activeConnections--;
            broadcastActiveConnections();
        });
    });

    function broadcastActiveConnections() {
        const message = { count: activeConnections };
        io.emit('visitorCountUpdate', message);
    }

    server.listen(3584, (err) => {
        if (err) throw err;
        console.log(`Ready on port ${3584}`);
    });
});