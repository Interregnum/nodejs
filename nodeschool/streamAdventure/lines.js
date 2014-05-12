var split = require('split');
var through = require('through');
var count = 1;

process.stdin.pipe(split('\n', true)).pipe(through(function (line) {
	if(count++ % 2 == 0) {
		this.queue(line.toString().toUpperCase());
	}
	else {
		this.queue(line.toString().toLowerCase());
	}
})).pipe(process.stdout);
