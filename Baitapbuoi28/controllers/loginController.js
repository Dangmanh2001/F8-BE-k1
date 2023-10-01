var express = require("express");
const md5 = require("../utils/md5");
const validate = require("../utils/validate");
const { validationResult } = require("express-validator");
const Customer = require("../models/Customer");
const db = require("../models/index");
const flash = require("express-flash");

module.exports = {
  login: (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const errE = req.flash("errE");
    const errP = req.flash("errP");
    const email = req.flash("email");
    const password = req.flash("password");
    res.render("login/login", {
      msg,
      errors,
      validate,
      errE,
      errP,
      email,
      password,
    });
  },

  handleLogin: async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;
    const users = await db.User;
    const user = await users.findOne({
      where: { email: email },
    });
    req.flash("email", email);
    req.flash("password", password);
    if (user) {
      if (email === user.email && md5(password) === user.password) {
        if (user.status) {
          req.session.login = true;
          req.session.user = user.id;
          if (user.role) {
            req.session.role = true;
            res.redirect("/admin/customers");
          } else {
            req.session.role = false;
            res.redirect("/customers");
          }
        } else {
          req.session.login = false;
          req.flash("msg", "Tài khoản chưa được kích hoạt");
          res.redirect("/login");
        }
      } else if (md5(password) !== user.password) {
        req.flash("msg", "Vui lòng kiểm tra lại thông tin");
        req.flash("errP", "Sai mật khẩu");
        res.redirect("/login");
      }
    } else {
      if (!errors.array().length) {
        req.flash("msg", "Vui lòng kiểm tra lại thông tin");
        req.flash("errE", "Sai email");
        res.redirect("/login");
      } else {
        req.flash("errors", errors.array());
        req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
        res.redirect("/login");
      }
    }
  },
};
