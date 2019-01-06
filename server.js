// Require HTTP module
const http = require('http');

http.createServer((req, res) => {
	// HTTP header
	res.writeHead(200, {'Content-Type': 'text/html'});
	// URL routing
	switch(req.url){
		case '/about':
			res.write('<h1>About us page</h1>');
		break;
		case '/contact':
			res.write('<h1>Contact us page</h1>');
		break;
		default:
			res.write('<h1>Hello World!</h1>');
	}
	res.end();
})
.listen(3000, () => {
	console.log('Server started at port 3000');
});