var net = require('net');
var currentTime = function() {
	var date = new Date();
	var yyyy = date.getFullYear();
	var MM = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
	var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	return (yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + '\n');
};
var server = net.createServer(function(socket) {
	socket.end(currentTime());
});
server.listen(Number(process.argv[2]));
