const http = require('http');
const static = require('node-static');
const querystring = require('node:querystring');
const port = process.env.PORT || 5001;

const file = new static.Server('./public');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/food') {
    file.serveFile('/pizza.html', 200, {}, req, res);
  }

  // form route --> /form
  if (req.method === 'GET' && req.url === '/form') {
    file.serveFile('/form.html', 200, {}, req, res);
  }

  // submit route --> /submit
  else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const userdata = querystring.parse(body);
      console.log(userdata);
      const { username, email, newsletter } = userdata;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<p>This is username: ${username}</p>`);
      res.write(`<p>This is the email: ${email}</p>`);
      res.write(
        `<p>The user has checked the newsletter checkbox: ${
          newsletter || 'no'
        }</p>`
      );
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
