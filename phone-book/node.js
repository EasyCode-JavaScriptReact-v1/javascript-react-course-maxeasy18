const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer( (request, response) =>{
	let path = request.url;
	if(path.indexOf('html') != -1 || path == '/'){
		path = '/index.html';
	}
	// path = '/index.html';

	let source = '';
	if (fs.existsSync('.' + path)) {
	    source = fs.readFileSync('.' + path);
	}else{
		source = 'no such resource';
		response.statusCode = 404;
	}
	response.end(source);
}).listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`)
})
