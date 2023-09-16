var express = require("express");

const Register = require("../models/Register");
const { render } = require("../app");

module.exports = {
  register: (req, res) => {
    errE = "";
    errN = "";
    errP = "";
    res.render("../views/register", { errE, errP, errN });
  },
  handleRegister: async (req, res) => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const register = await Register;
    const { email1, password1, name1 } = req.body;
    const project = await register.findOne({ where: { email: email1 } });
    if (project) {
      if (email1 === project.email) {
        errE = "Email đã tồn tại";
        errN = "";
        errP = "";
        res.render("../views/register", { errE, errP, errN });
      }
    } else {
      if (!validateEmail(email1)) {
        errE = "Không đúng định dạng";
        errN = "";
        errP = "";
        res.render("../views/register", { errE, errP, errN });
      } else {
        const project = await register.create({
          email: email1,
          password: password1,
          name: name1,
        });

        setTimeout(() => {
          errE = "Đăng kí thành công";
          errP = "";
          res.render("../views/login", { errE, errP });
        }, 2000);
      }
    }
  },
};
