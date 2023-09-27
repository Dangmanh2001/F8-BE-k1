var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");

const AdminController = require("../controllers/adminController");

router.get("/", AdminController.index);
router.get("/create", AdminController.create);
router.post("/create", CustomerValidate(), AdminController.store);

router.get("/edit/:id", AdminController.edit);
router.post("/edit/:id", CustomerValidate(), AdminController.update);

router.post("/delete_a_lot", AdminController.deleteCheckbox);

module.exports = router;
