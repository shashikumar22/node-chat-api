var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
})

socket.emit('createMessage', {
  to: "Ken",
  text: "Hey Ken",
  createdAt: 123
})

socket.on('newMessage', function(data){
  console.log(`New message ${JSON.stringify(data)}`);
})

socket.on('disconnect', function  () {
  console.log('Disconnected from server');
})
