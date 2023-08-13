const http = require("http");
let url = require("url");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const phone = require("./module/phone");
const account = require("./module/account");
const success = require("./module/success");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const path = req.url;

  if (path === "/") {
    phone.index(req, res);
  } else if (path === "/account") {
    account.index(req, res);
  } else if (path === "/success") {
    success.index(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
