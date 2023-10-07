var nodemailer = require("nodemailer");
var flash = require("connect-flash");
var model = require("../models/index");
var user = model.User;
var jwt = require("jsonwebtoken");

module.exports = {
  email: (req, res) => {
    const err = req.flash("err");
    const success = req.flash("success");
    res.render("forgotPass/forgotP", { err, success });
  },
  sendEmail: async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const emailSend = await user.findOne({
      where: {
        email: email,
      },
    });
    var older_token = jwt.sign(
      {
        data: emailSend.id,
      },
      "secret",
      { expiresIn: "15m" }
    );

    console.log(older_token);
    if (emailSend) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "phaodai2000@gmail.com",
          pass: "lvky hbad mfzj dinb",
        },
      });

      // send mail with defined transport object
      const email1 = await transporter.sendMail({
        from: '"Fred Foo 👻" <phaodai2000@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Quên mật khẩu", // Subject line
        text: "http://localhost:3000/reset/" + older_token, // plain text body
      });

      transporter.sendMail(email1, async (error, info) => {
        if (error) {
          console.error(error);
        } else {
          req.flash("success", "Vui lòng kiểm tra email để đặt lại mật khẩu");
          res.redirect("/forgot");
        }
      });
    } else {
      req.flash("err", "Tài khoản này chưa được tạo");
      res.redirect("/forgot");
    }
  },
};
