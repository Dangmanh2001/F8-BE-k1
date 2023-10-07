var express = require("express");
const forgotPController = require("../controllers/forgotPController");

var router = express.Router();

/* GET users listing. */
router.get("/", forgotPController.email);
router.post("/", forgotPController.sendEmail);

module.exports = router;
