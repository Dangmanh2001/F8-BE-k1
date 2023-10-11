var express = require("express");
var router = express.Router();
var loginController = require("../controller/loginController");
var passport = require("passport");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
    return;
  }
  next();
};

/* GET users listing. */
router.get("/", isLogin, loginController.login);
router.post("/", loginController.handleLogin);
router.get(
  "/loginFacebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/federated/facebook",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    successRedirect: "/",
  })
);

router.get("/loginGithub", passport.authenticate("github"));
router.get(
  "/callback/github",
  passport.authenticate("github", {
    failureRedirect: "/login",
    successRedirect: "/",
  })
);

module.exports = router;
