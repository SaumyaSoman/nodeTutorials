// Once readFile is done callback function is evoked
var fs= require('fs');

fs.readFile('E:/projects/node/tutorial.txt', 'utf-8', function callback(err, results){
	if(err) return handleError(err);
	console.log('File contents' , results);
});
