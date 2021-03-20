const path = require('path');
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

io.on('connection', socket => {
    console.log('socket id:', socket.id);

    socket.on('player-joined', message => console.log(message));
});

server.listen(PORT);