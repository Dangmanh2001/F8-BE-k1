var express = require("express");
var router = express.Router();

const loginController = require("../controllers/loginController");
const LoginValidate = require("../middlewares/LoginValidate");

router.get("/", loginController.login);

router.post("/", LoginValidate(), loginController.handleLogin);
module.exports = router;
