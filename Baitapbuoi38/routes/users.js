var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.index);

module.exports = router;
