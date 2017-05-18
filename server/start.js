var http = require('http');
var server = http.createServer();
var Promise = require('bluebird');

server.on('request', require('../app'));

server.listen(process.env.PORT || 3001, function() {
	console.log('Server is listening on port 3001!');
});