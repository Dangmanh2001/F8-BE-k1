var express = require("express");

var router = express.Router();
const passport = require("passport");
const logoutController = require("../controller/logoutController");
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  }

  next();
};

/* GET users listing. */

router.get("/", logoutController.logout);

module.exports = router;
