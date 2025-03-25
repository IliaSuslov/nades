import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
let activeConnections = 0;

console.log(1, dev, process.env.NODE_ENV)
app.prepare().then(() => {

    const server = createServer((req, res) => {
        return handle(req, res);
    });

    const io = new Server(server, {
        cors: {
            origin: "https://10.201.48.45:10000",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
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

    server.listen(8080, (err) => {
        if (err) throw err;
        console.log('> Сервер запущен на 8080 порте');
    });
});