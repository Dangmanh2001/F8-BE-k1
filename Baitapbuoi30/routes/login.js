var express = require("express");

var router = express.Router();

const loginController = require("../controllers/loginController");

const passport = require('passport');

const isLogin = (req, res, next) => {
    if(req.user){
      res.redirect("/")
    }
    next()
}

router.get("/",isLogin, loginController.login);

router.post('/', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), 
loginController.handleLogin)

module.exports = router;
