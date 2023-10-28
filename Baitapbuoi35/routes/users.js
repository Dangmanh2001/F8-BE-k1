var express = require("express");
const limit = require("../middleware/limitMiddleware");
const usersController = require("../controller/usersController");
const revokeMiddleware = require("../middleware/revokeMiddleware");
var router = express.Router();

/* GET users listing. */
router.put(
  "/update/:id",
  revokeMiddleware,
  limit.apiLimiter,
  usersController.updatePut
);
router.patch(
  "/update/:id",
  revokeMiddleware,
  limit.apiLimiter,
  usersController.updatePatch
);
router.delete(
  "/delete/:id",
  revokeMiddleware,
  limit.apiLimiter,
  usersController.delete
);

module.exports = router;
