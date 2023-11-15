var express = require("express");
var router = express.Router();
const model = require("../models/index");

const indexController = require("../controller/indexController");
const Auth = async (req, res, next) => {
  if (req.user) {
    const cookie = req.cookies;
    const token = await model.login_token.findOne({
      where: {
        userId: req.user.dataValues.id,
      },
    });
    if (cookie.loginToken === token.dataValues.token) {
      next();
    } else {
      res.clearCookie("loginToken");
      res.clearCookie("token");
      res.clearCookie("ProjectB");
      res.redirect("/login");
    }
    return;
  }

  next();
};
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
    return;
  }

  next();
};
/* GET home page. */
router.get("/", Auth, isLogout, indexController.index);
router.get("/verify", isLogout, indexController.verify);
router.post("/verify", isLogout, indexController.handleVerify);

module.exports = router;
