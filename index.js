var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 8080;

http.createServer(function (request, response) {
	//Send the HTTP header
	//HTTP Status: 200 : OK
	//Contest Type: text/plain
	
	//write to our server, set config for the response 
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});
	var readStream = fs.createReadStream(__dirname + '/index.html');
	//send a message
	readStream.pipe(response);

}).listen(PORT);
	console.log('Example app listening on port 3000!');

