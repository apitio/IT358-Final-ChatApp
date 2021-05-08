const io = require('socket.io')(3000)

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
var port = 8000;
app.listen(port);
console.log('server on ' + port);

const users = {}

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })

  socket.on('typing', (data)=>{
    if(data.typing==true)
      socket.broadcast.emit('display', data)
    else
      socket.broadcast.emit('display', data)
  })

  socket.on('send-text', message => {
    console.log(users[socket.id]);
    socket.to(users[socket.id]).emit("message");
  })

  socket.on('send-script-message', message => {
    const script_result = `Script invoked by ${users[socket.name]}`
    console.log(users[socket.id]);
    socket.to(users[socket.id]).emit("message");
  })

  socket.on('send-script-message-failure', message => {
    const script_result = `Script invoked by ${users[socket.name]}`
    console.log(users[socket.id]);
    socket.to(users[socket.id]).emit("message");
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})