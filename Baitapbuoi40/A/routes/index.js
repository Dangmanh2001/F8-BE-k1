var express = require("express");
var router = express.Router();

const indexController = require("../controller/indexController");
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
    return;
  }

  next();
};
/* GET home page. */
router.get("/", isLogout, indexController.index);
router.get("/verify", isLogout, indexController.verify);
router.post("/verify", isLogout, indexController.handleVerify);

module.exports = router;
