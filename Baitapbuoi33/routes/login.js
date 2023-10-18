var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();
const passport = require("passport");

/* GET users listing. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/short_link");
    return
  }

  next();
};

/* Authentication Routes */
router.get("/", loginController.login);
router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    successRedirect: "/short_link",
  })
);

module.exports = router;
