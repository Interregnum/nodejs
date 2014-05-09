var http = require('http');
var bl = require('bl');
var output = new Array(3);
var callbackCount = 0;
var printMessage = function() {
	console.log(output[0]);
	console.log(output[1]);
	console.log(output[2]);
};

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data) {
		output[0] = data.toString('utf8');
		if(++callbackCount == 3) {
			printMessage();
		}
	}));
});

http.get(process.argv[3], function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data) {
		output[1] = data.toString('utf8');
		if(++callbackCount == 3) {
			printMessage();
		}
	}));
});

http.get(process.argv[4], function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data) {
		output[2] = data.toString('utf8');
		if(++callbackCount == 3) {
			printMessage();
		}
	}));
});
