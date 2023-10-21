var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");
const permissionMiddleware =require("../middlewares/permissionMiddleware")


/* GET users listing. */
router.get("/",async function(req,res,next){
   const permissions= await permissionMiddleware.role(req,res)

   return permissions.includes("users.read")?next():res.redirect("/");
}, UserController.index);

router.get("/permission/:id",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
    return permissions.includes("users.read")?next():res.redirect("/");
 }, UserController.permission);

router.post("/permission/:id",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
    return permissions.includes("users.read")?next():res.redirect("/");
 }, UserController.handlePermission);

module.exports = router;
