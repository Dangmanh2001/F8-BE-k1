var express = require("express");
const bcrypt = require('bcrypt');
const validate = require("../utils/validate");
const { validationResult } = require("express-validator");



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
    res.redirect("/")
  }
};
