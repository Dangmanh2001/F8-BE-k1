var express = require("express");
var router = express.Router();
const AuthController = require("../controller/authController");

/* GET home page. */
router.post("/", AuthController.login);
router.get("/", AuthController.profile);

module.exports = router;
