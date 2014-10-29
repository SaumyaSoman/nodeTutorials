//This will nt wrk as readFile is a blocking function

var fs= require('fs');
var results= fs.readFile('E:\projects\node\tutorial.txt');
console.log('File contents' , results);