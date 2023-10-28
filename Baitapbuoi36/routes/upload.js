var express = require("express");
const uploadController = require("../controller/uploadController");
var router = express.Router();

const uploadMiddleware = require("../middleware/uploadsMiddleware");

/* GET users listing. */
router.post("/", uploadMiddleware, uploadController.upload);
router.get("/", uploadController.index);

module.exports = router;
