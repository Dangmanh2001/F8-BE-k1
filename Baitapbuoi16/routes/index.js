var express = require("express");
var login = require("../controller/login");
var router = express.Router();

/* GET home page. */
router.get("/dangnhap", function (req, res) {
  if (req.session.status) {
    res.redirect("/login");
  } else {
    req.session.status = false;

    return res.render("../views/index");
  }
});
router.get("/login", function (req, res) {
  if (req.session.status) {
    res.render("../views/login");
  } else {
    res.redirect("/dangnhap");
  }
});

router.get("/", function (req, res) {
  req.session.status = false;
  res.redirect("/dangnhap");
});

router.post("/dangnhap", login.handleLogin);
module.exports = router;
