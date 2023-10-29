var express = require("express");
const uploadController = require("../controller/uploadController");
var router = express.Router();

const uploadMiddleware = require("../middleware/uploadsMiddleware");
const authController = require("../controller/authController");

/* GET users listing. */
router.post(
  "/",
  authController.profile,
  uploadMiddleware,
  uploadController.upload
);
router.get("/", uploadController.index);

module.exports = router;
