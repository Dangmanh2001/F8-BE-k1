var express = require("express");
const sendEmailController = require("../controller/sendEmailController");
var router = express.Router();

/* GET users listing. */
router.get("/index", sendEmailController.index);
router.post("/index", sendEmailController.send);
router.get("/history", sendEmailController.history);
router.get("/history/:id", sendEmailController.seeDetails);

module.exports = router;
