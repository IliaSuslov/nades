import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();
let activeConnections = 0;

app.prepare().then(() => {
    const server = createServer(handler);

    const io = new Server(server, {
        cors: {
          origin: "*", // Allow all origins (adjust for production)
          methods: ["GET", "POST"],
        },
        transports: ['websocket'], // Force WebSocket transport
      });
    
    io.on('connection', (socket) => {
        console.log('Новый клиент подключен:', socket.id);

        activeConnections++;
        broadcastActiveConnections();

        socket.on('disconnect', () => {
            console.log('Клиент отключился:', socket.id);
            activeConnections--;
            broadcastActiveConnections();
        });
    });

    function broadcastActiveConnections() {
        const message = { type: 'visitorCount', count: activeConnections };
        io.emit('visitorCountUpdate', message);
    }

    server.listen(8080, (err) => {
        if (err) throw err;
        console.log(`Ready on port 8080`);
    });
});