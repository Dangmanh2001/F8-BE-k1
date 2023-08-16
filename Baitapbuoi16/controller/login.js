var express = require("express");
var session = require("express-session");
var flash = require("connect-flash");
var app = express();

app.use(flash());

module.exports = {
  handleLogin: (req, res) => {
    req.session.status = false;
    req.session.email = "admin@gmail.com";
    req.session.password = "123456";
    const { email, password } = req.body;
    console.log(email, password);
    if (email === req.session.email && password === req.session.password) {
      req.session.status = true;
      res.redirect("/login");
    } else {
      res.redirect("/dangnhap");
    }
  },
  handleLogout: (req, res) => {
    res.redirect("/");
  },
};
