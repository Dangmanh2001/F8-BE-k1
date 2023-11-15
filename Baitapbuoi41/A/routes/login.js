var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();
const passport = require("passport");
const model = require("../models/index");
/* GET users listing. */
const isLogin = async (req, res, next) => {
  const cookie = req.cookies;
  if (req.user) {
    res.redirect("/");
    return;
  }

  next();
};

/* Authentication Routes */
router.get("/", isLogin, loginController.login);
router.post(
  "/",

  passport.authenticate("local", {
    // failureRedirect: "/login",
    failureFlash: true,
    // successRedirect: "/verify",
  }),
  loginController.getToken,
  passport.authenticate("local", {
    successRedirect: "/verify",
  })
);

module.exports = router;
