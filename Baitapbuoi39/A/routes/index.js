var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
    return;
  }

  next();
};
/* GET home page. */
router.get("/", isLogout, function (req, res, next) {
  const user = req.user;

  var token = jwt.sign({ data: user }, "abc");
  if (req.cookies.ProjectB) {
    res.redirect("http://localhost:3006/users");
    return;
  }
  res.cookie("token", token);
  res.render("index", { title: "Trang chủ" });
});

module.exports = router;
