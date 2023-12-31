const nodemailer = require("nodemailer");
const model = require("../models/index");
const sendEmail = model.sendEmail;
const moment = require("moment");

module.exports = {
  index: (req, res) => {
    const msg = req.flash("msg");
    console.log(msg);
    res.render("send_email/sendEmail", { msg });
  },
  send: async (req, res) => {
    const { emailSendTo, title, content } = req.body;

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
    const email = await transporter.sendMail({
      from: '"Fred Foo 👻" <phaodai2000@gmail.com>', // sender address
      to: `${emailSendTo},${emailSendTo}`, // list of receivers
      subject: title, // Subject line
      text: content, // plain text body
    });

    transporter.sendMail(email, async (error, info) => {
      if (error) {
        console.error(error);
      } else {
        const sendEmails = await sendEmail.create({
          email_send_to: emailSendTo,
          title: title,
          content: content,
        });
        req.flash("msg", "Đã gửi");
        res.redirect("/sendEmail/index");
      }
    });
  },
  history: async (req, res) => {
    const data = await sendEmail.findAll();

    res.render("send_email/history", { data, moment });
  },
  seeDetails: async (req, res) => {
    const id = req.params.id;
    const data = await sendEmail.findByPk(id);

    await sendEmail.update(
      {
        status: 1,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.render("send_email/seeDetails", { data });
  },
};
