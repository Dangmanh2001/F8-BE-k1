var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();
const passport = require("passport");

/* GET users listing. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/users");
  }

  next();
};

/* Authentication Routes */
router.get("/", isLogin, loginController.login);
router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    successRedirect: "/users",
  })
);

module.exports = router;
