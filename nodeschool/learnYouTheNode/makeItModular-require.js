var filterLS = require('./makeItModular-module.js');

filterLS(process.argv[2], process.argv[3], function(err, data) {
	var i = 0;
	while(data[i]) {
		console.log(data[i++]);
	}
});
