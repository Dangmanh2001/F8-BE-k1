var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");

const RepairValidate = require("../middlewares/RepairValidate");

const customersController = require("../controller/CustomerController");

/* GET users listing. */
router.get("/", customersController.index);
router.get("/create", customersController.create);
router.post("/create", CustomerValidate(), customersController.store);
router.get("/repair:id", customersController.repair);
router.post("/repair:id", RepairValidate(), customersController.handleRepair);
router.post("/:id", customersController.delete);

module.exports = router;
