import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? "localhost" : "http://10.201.54.158"
const port = dev ? "3000" : "10000"
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
let activeConnections = 0;

app.prepare().then(() => {
    const server = createServer(handler);

    const io = new Server(server, {
        cors: {
            origin: "https://nades.onrender.com",
            methods: ["GET", "POST"],
            credentials: true
        }
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

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Ready on http://${hostname}:${port}`);
    });
});