var fs = require('fs'); // require the filesystem api
 var file2watch = "Student.json"; // which file to watch

/*function readXML(err,data){ // function for reading XML files
 if (err){ // if there's an error
 throw err; // throw the error message
 }
 console.log(data); // show the data in the conosle.
 }

function iSeeYou(curr, prev){
 if(curr.size != prev.size){ // if there's been a change to the file (size change)
 fs.readFile(file2watch,'utf8', readXML) // read the file contents, call readXML
 }
 }
 fs.watchFile(file2watch, iSeeYou); // add a watcher to a file
*/


var fs = require('fs');
var filePath = 'sample.txt';
var file = fs.readFileSync(filePath);
console.log('Initial File content : ' + file);

 fs.watchFile(filePath, function() {
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});
