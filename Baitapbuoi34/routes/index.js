var express = require("express");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
var router = express.Router();


/* GET home page. */
router.get("/", async function (req, res, next) {
  const permissions= await permissionMiddleware.role(req,res)

  return permissions.includes("users.read")?res.render("index", { title: "Express" }):res.render("index", { title: "Express", layout:"layouts/auth_layout" });
  

});

module.exports = router;


