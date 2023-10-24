var express = require("express");
const limit = require("../middleware/limitMiddleware");
const usersController = require("../controller/usersController");
const banMiddleware = require("../middleware/banMiddleware");
var router = express.Router();

/* GET users listing. */
router.put(
  "/update/:id",
  banMiddleware,
  limit.apiLimiter,
  usersController.updatePut
);
router.patch(
  "/update/:id",
  banMiddleware,
  limit.apiLimiter,
  usersController.updatePatch
);
router.delete(
  "/delete/:id",
  banMiddleware,
  limit.apiLimiter,
  usersController.delete
);

module.exports = router;
