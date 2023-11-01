var express = require("express");
const logoutController = require("../controller/logoutController");

var router = express.Router();

/* GET users listing. */
router.post("/", logoutController.logout);

module.exports = router;
