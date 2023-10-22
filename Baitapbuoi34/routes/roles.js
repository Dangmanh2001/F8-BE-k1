var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");
const permissionMiddleware = require("../middlewares/permissionMiddleware")

router.get("/",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
 
     permissions.includes("users.read")?next():res.redirect("/");
 }, RoleController.index);
router.get("/add",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
    if(permissions.includes("users.read")){
        if( permissions.includes("users.add")){
            next()
        }else{
            res.redirect("/")
            return
        }
    }else {
        res.redirect("/")
    }
       
 }, RoleController.add);
router.post("/add", RoleController.handleAdd);

router.get("/edit/:id",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
    if(permissions.includes("users.read")){
        if( permissions.includes("users.update")){
            next()
        }else{
            res.redirect("/")
            return
        }
    }else{
        res.redirect("/")
    }
        
    
      
 }, RoleController.edit);
router.post("/edit/:id", RoleController.handleEdit);

router.post("/delete/:id",async function(req,res,next){
    const permissions= await permissionMiddleware.role(req,res)
    if(permissions.includes("users.read")){
        if( permissions.includes("users.delete")){
            next()
        }else{
            res.redirect("/")
            return
        }
    }else{
        res.redirect("/")
    }
        
    
      
 }, RoleController.delete);

module.exports = router;
