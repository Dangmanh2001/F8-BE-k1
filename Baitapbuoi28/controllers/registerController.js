const model = require("../models/index");
const flash = require("connect-flash");
const validate = require("../utils/validate");
const { validationResult } = require("express-validator");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const CLIENT_ID =
  "3664799864-t59d5c2f8okr3crerijltm05tv1l1hio.apps.googleusercontent.com";
const ClIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//040W0ThCBKVgwCgYIARAAGAQSNwF-L9IrPVeMc0zwK0ug0eJyjYCPbAjDF_jYxIHM2ZZb2NCNl38NImq706NH8txH391RbPA7xkg";

module.exports = {
  register: (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    let email = req.flash("email");
    let name = req.flash("name");
    let password = req.flash("password");
    res.render("register/register", {
      msg,
      email,
      password,
      errors,
      name,
      validate,
    });
  },
  handleRegister: async (req, res) => {
    const errors = validationResult(req);
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      ClIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();
    req.session.token = accessToken.token;

    const register = model.User;
    if (errors.isEmpty()) {
      const { email, password, name } = req.body;
      req.session.user = email;
      // Tạo một transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "phaodai2000@gmail.com",
          pass: "lvky hbad mfzj dinb",
          type: "OAuth2",
          clientId: CLIENT_ID,
          clientSecret: ClIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const email1 = {
        from: "phaodai2000@gmail.com",
        to: req.body.email,
        subject: "Active account",
        html:
          'Click <a href = "http://localhost:3000/verify/' +
          accessToken.token +
          '">here</a> to active ',
      };

      transporter.sendMail(email1, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log(info);
        }
      });

      req.flash("msg", "Đăng kí thành công");
      req.body.password = md5(req.body.password);
      const jane = await register.create(req.body);
      res.redirect("/register");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng kiểm tra lại thông tin");
      res.redirect("/register");
    }
  },
};
