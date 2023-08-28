const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when a client conects
io.on('connection', socket => {
  console.log('New WS Connection...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));