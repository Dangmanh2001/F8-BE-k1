var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();
const passport = require("passport");

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  }

  next();
};

/* GET users listing. */
router.get("/", isLogout, userController.index);

router.get("/permission/:id", isLogout, userController.permission);
router.post("/permission/:id", isLogout, userController.handlePermission);

module.exports = router;
