const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/contact-me':
            path += 'contact-me.html'
            break;
        default:
            path += '404.html'
            break;
    }

    //Send an html page
    fs.readFile(path, (err, data) => {
       if(err) {
        console.log(err);
        res.end();
       } else {
        res.end(data);
       }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})