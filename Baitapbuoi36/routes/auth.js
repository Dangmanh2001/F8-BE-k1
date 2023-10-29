var express = require("express");
var router = express.Router();
const AuthController = require("../controller/authController");

router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);

module.exports = router;
