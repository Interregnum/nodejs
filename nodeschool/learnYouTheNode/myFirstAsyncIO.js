var fs = require('fs');

var buf = fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if(!err) {
		var elements = data.split('\n');
		console.log(elements.length - 1);
	}
});
