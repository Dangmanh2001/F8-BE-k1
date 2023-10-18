var express = require("express");

var router = express.Router();
const passport = require("passport");
const logoutController = require("../controller/logoutController");

/* GET users listing. */

router.get("/", logoutController.logout);

module.exports = router;
