const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
let url = require("url");

const auth = require("./module/app");
const Session = require("./Base/Sessions");
const home = require("./module/home");
const tutorial = require("./module/tutorial");
const path = require("path");
const server = http.createServer((req, res) => {
  const session = new Session(req, res);

  session.start();
  res.statusCode = 200; //Status Code
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  url = url.parse(req.url);

  const pattern = /\/*$/; //regex
  const pathname = url.pathname.replace(pattern, "");

  if (pathname === "/login") {
    auth.login(req, res);
  } else if (pathname === "") {
    home.index(req.res);
  } else if (pathname === "/tutorial") {
    tutorial.index(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
