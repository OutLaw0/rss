const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, '../01-read-file') + '/text.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    process.stdout.write(data) //console.log(data);*/
});
readStream.on("error", (error) => {
	console.log(error.stack);
});

/* old method
fs.readFile(path.join(__dirname, '../01-read-file') + '/text.txt', 'utf8', (err, data) => {
    if(err) throw err;
    process.stdout.write(data);
});*/
