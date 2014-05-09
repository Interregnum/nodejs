var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url, true);
	var query = parsedUrl.query;
	var path = parsedUrl.pathname;
	var date;
	var output;
	if(path == '/api/parsetime') {
		date = new Date(query.iso);
		output = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	}
	if(path == '/api/unixtime') {
		date = new Date(query.iso);
		output = {
			unixtime: date.getTime()
		};
	}
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(output));
});
server.listen(process.argv[2]);
