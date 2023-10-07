var express = require("express");
const resetPController = require("../controllers/resetPController");

var router = express.Router();

/* GET users listing. */
router.get("/:token", resetPController.reset);
router.post("/:token", resetPController.handleReset);

module.exports = router;
