var express = require("express");
var router = express.Router();
const isLogin = (req, res, next) => {
  const cookie = req.cookies;
  if (cookie.token || cookie.ProjectB) {
    res.redirect("/users");
    return;
  }

  next();
};

/* GET home page. */
router.get("/", isLogin, function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/", isLogin, function (req, res, next) {
  const cookie = req.cookies;
  res.cookie("ProjectB", cookie);
  res.redirect("http://localhost:3000/login");
});

module.exports = router;
