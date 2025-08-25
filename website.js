const http = require("http");

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>This is node js</h1><p>Welcome to the server!</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>this is about is node js</h1><p>Welcome to the server!</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Page is not found</h1><p>Welcome to the server!</p>");
  }
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
