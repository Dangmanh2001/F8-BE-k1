var express = require("express");
var router = express.Router();
const isLogout = (req, res, next) => {
  const cookie = req.cookies;
  if (cookie.token || cookie.ProjectB) {
    res.render("users/index");
    return;
  } else {
    res.redirect("/");
  }

  next();
};
/* GET users listing. */
router.get("/", isLogout, function (req, res, next) {
  res.render("users/index");
});
router.post("/", function (req, res, next) {
  res.clearCookie("token");
  res.clearCookie("ProjectB");
  res.redirect("/");
});

module.exports = router;
