const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Привет с сервера на JS!</h1>');
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
