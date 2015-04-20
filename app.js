var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});
