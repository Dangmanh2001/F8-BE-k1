var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();
const passport = require("passport");
const model = require("../models/index");

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  }

  next();
};

const isErr = async (req, res, next) => {
  const id = req.params.id;
  const Role = await model.Role.findByPk(id);

  if (!Role) {
    res.send("Đường dẫn không tồn tại");
  }

  next();
};

/* GET users listing. */
router.get("/", userController.index);

router.get("/permission", isLogout, userController.permission);
router.post("/permission", isLogout, userController.handlePermission);
router.get("/update/:id", isLogout, isErr, userController.update);
router.post("/update/:id", isLogout, isErr, userController.handleUpdate);

module.exports = router;
