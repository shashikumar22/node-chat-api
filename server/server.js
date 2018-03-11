const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname+ '/../public');
var app =express();


const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.on('disconnect', () =>{
    console.log("User disconnected");
  })
})

server.listen(port,() =>{
  console.log("starterd listening at port 3000");
})