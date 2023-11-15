const jwt = require("jsonwebtoken");
const model = require("../models/index");
const DeviceDetector = require("node-device-detector");
const nodemailer = require("nodemailer");
module.exports = {
  index: async (req, res) => {
    const user = req.user;

    var token = jwt.sign({ data: user }, "abc");
    if (req.cookies.ProjectB) {
      res.redirect("http://localhost:3006/users");
      return;
    }

    res.cookie("token", token);
    res.render("index", { title: "Trang chủ" });
  },
  verify: (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    res.render("sendMail/verify", { msg, msgType });
  },
  handleVerify: async (req, res) => {
    const { email } = req.body;
    const user = req.user;

    if (user) {
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
        subject: "Xác thực", // Subject line
        html: '<p>Click vào <a href="http://localhost:3000">link</a> để xác minh</p>', // plain text body
      });

      transporter.sendMail(email1, async (error, info) => {
        if (error) {
          console.error(error);
        } else {
          req.flash("success", "Vui lòng kiểm tra email để đặt lại mật khẩu");
          res.redirect("/verify");
        }
      });
    } else {
      req.flash("err", "Email không hợp lệ");
      res.redirect("/verify");
    }
  },
};
