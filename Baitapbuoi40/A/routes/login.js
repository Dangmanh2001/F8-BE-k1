var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();
const passport = require("passport");
const model = require("../models/index");
const DeviceDetector = require("node-device-detector");

/* GET users listing. */
const isLogin = (req, res, next) => {
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
  async function (req, res, next) {
    const { email } = req.body;
    const detector = new DeviceDetector();
    const userAgent = req.get("User-Agent");
    const result = detector.detect(userAgent);

    await model.User.update(
      { device: JSON.stringify(result.device) },
      {
        where: {
          email: email,
        },
      }
    );

    next();
  },
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    successRedirect: "/verify",
  })
);

module.exports = router;
