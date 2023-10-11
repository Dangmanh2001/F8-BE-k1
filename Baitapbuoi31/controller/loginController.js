const bcrypt = require("bcrypt");
const model = require("../models/index");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
var User = model.User;

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("msg");
    res.render("login/login", { pageTitle: "Đăng nhập", msg });
  },
  handleLogin: async (req, res) => {
    const { email, password } = req.body;

    passport.authenticate("local", {});

    // const user =await User.findOne({
    //   where:{
    //     email,
    //   }
    // })
    // if(user){
    //   const {password:hash}= user
    //   bcrypt.compare(password, hash, async function (err, result) {
    //     if(result){
    //       res.send("handleLogin")
    //     }else{
    //       res.redirect("/auth/login")
    //     }
    //   })
    // }
    res.send("Done");
  },
  loginFacebook: (req, res) => {},
};
