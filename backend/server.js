const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/api/health') {
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  if (req.url === '/api/hello') {
    return res.end(JSON.stringify({ message: 'Hello from backend' }));
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'not found' }));
});

module.exports = server;

if (require.main === module) {
  server.listen(3000, () => console.log('listening on 3000'));
}