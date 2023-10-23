var express = require("express");
const limit = require("../middleware/limitMiddleware");
const usersController = require("../controller/usersController");
var router = express.Router();

/* GET users listing. */
router.put("/update/:id", limit.apiLimiter, usersController.updatePut);
router.patch("/update/:id", limit.apiLimiter, usersController.updatePatch);
router.delete("/delete/:id", limit.apiLimiter, usersController.delete);

module.exports = router;
