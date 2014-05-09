var http = require('http');
var BufferList = require('bl');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.pipe(BufferList(function(err, data) {
		console.log(data.length);
		console.log(data.toString('utf8'));
	}));
});
