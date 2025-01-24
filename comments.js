// Create web server
// Create a web server that listens for requests on port 3000, and responds with a static file named comments.html. 
// Use the provided comments.html file to send as a response to the client. 
// You can use the fs module to read the file and send it to the client. 
// Use the createServer method to create the server.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            res.write('File not found');
            res.end();
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});