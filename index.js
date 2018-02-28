/*var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});*/


var fs = require('fs');

var directory = "./";
var dir = Buffer.from(directory);

fs.readdir(dir, (err, files)=> {
	if (err) {
		console.log(err.message);
	} else {
		console.log(files);
		fs.writeFile('text.txt', files);
	}
});