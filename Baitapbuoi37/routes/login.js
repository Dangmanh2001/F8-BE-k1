var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();

/* GET users listing. */
router.post("/", loginController.login);
router.post("/profile", loginController.profile);
module.exports = router;
