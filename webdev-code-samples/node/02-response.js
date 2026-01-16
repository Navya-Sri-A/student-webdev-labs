const http = require('http');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  res.writeHead(208, {
    'Content-Type': 'text/html',
    'X-header-response': 'hello',
    'X-another-header-response': 'world',
  });
  res.write('<h1>Hello World, Node making updates </h1>');
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
