var fs = require('fs');

var filePath = 'student.json';
var file = fs.readFileSync(filePath);
console.log('Initial File content : ' + file);

 fs.watchFile(filePath, function() {
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});
 
 