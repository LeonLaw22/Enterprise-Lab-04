var http = require("http");

http.createServer(function (request, response) {
	//Send the HTTP header
	//HTTP Status: 200 : OK
	//Contest Type: text/plain
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});
	var readStream = fs.createreadStream(__dirname + 'index.html');
	//send a message
	readStream.pipe(response);
	
	//Send the response body as "Hello World"
	response.and('Hello World\n');
})listen(PORT);
	console.log('Example app listening on port 3000!');


//Console will print the message 
var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Our app is tunning on port ${ PORT }');
});