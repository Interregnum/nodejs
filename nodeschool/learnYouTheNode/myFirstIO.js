var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var elements = buf.toString().split('\n');

console.log(elements.length - 1);
