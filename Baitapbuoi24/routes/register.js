var express = require("express");
const Register = require("../models/Register");
const registerController = require("../Controller/registerController");
var router = express.Router();

/* GET home page. */
router.get("/", registerController.register);
router.post("/", registerController.handleRegister);

module.exports = router;
