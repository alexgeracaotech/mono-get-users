import http from 'node:http';

const users = [{
  name: 'Alex Bessa',
  email: 'alex@email.com'
}, {
  name: 'Valdiana Bessa',
  email: 'valdiana@email.com'
}, {
  name: 'Ana Bessa',
  email: 'ana@email.com'
}];

http.createServer((request, response) => {
  response.writeHead(
    200,
    { "content-type": "application/json" }
  );
  response.end(JSON.stringify(users));
}).listen(3000);
