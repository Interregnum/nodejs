var http = require('http');
var BufferList = require('bl');
var server = http.createServer(function(req, res) {
	if(req.method != 'POST') {
		res.writeHead(400);
		res.end();
	}
	req.pipe(BufferList(function(err, data) {
		if(!err) {
			res.writeHead(200);
			res.end(data.toString().toUpperCase());
		}
	}));
});
server.listen(process.argv[2]);
