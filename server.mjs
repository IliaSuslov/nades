import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
let activeConnections = 0;

app.prepare().then(() => {
    const server = createServer((req, res) => {
        return handle(req, res);
    });

    const io = new Server(server, {
        cors: {
            origin: "0.0.0.0:10000",
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

    server.listen(process.env.NEXT_PUBLIC_PORT, (err) => {
        if (err) throw err;
        console.log(`Сервер запущен на ${process.env.NEXT_PUBLIC_PORT} порте`);
    });
});