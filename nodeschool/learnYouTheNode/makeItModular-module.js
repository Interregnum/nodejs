function filterLS(dir, ext, callback) {
	var fs = require('fs');
	var path = require('path');

	fs.readdir(dir, function(err, list) {
		if(!err) {
			var output = new Array();
			var i = 0;
			var j = 0;
			while(list[i]) {
				if(path.extname(list[i]) === ('.' + ext)) {
					output.push(list[i]);
				}
				++i;
			}
			callback(null, output);
		}
		else {
			callback(err, null);
		}
	});
};

module.exports = filterLS;
