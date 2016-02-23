"use strict";

var net = require('net');
var server = net.createServer(function(socket) { //'connection' listener
    console.log('client connected' + socket);
    socket.on('end', function() {
        console.log('client disconnected');
    });
    socket.write('hello\r\n');
    socket.pipe(socket);
});
server.listen(8124, function() { //'listening' listener
    console.log('server bound');
});
