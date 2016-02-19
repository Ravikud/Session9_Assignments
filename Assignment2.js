var http = require('http');


fs = require('fs');

var server = http.createServer(function (req, res) {
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) 
        return console.log(err);
    console.log('Text printed in the file');
	res.end("Text printed in the file");
});
});

server.listen(9090);
console.log('server running...')