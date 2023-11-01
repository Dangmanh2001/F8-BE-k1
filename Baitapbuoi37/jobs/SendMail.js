const nodemailer = require("nodemailer");

class SendMail {
  constructor(job) {
    this.job = job;
    console.log(job);
    this.handle();
  }

  handle = async () => {
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
    const email1 = await transporter.sendMail(
      {
        from: '"Fred Foo 👻" <phaodai2000@gmail.com>', // sender address
        to: this.job.email, // list of receivers
        subject: `Xin chào ${this.job.name}`, // Subject line
        html: `Xin chào ${this.job.name}, tôi đang test email`, // plain text body
      },
      async (error, info) => {
        console.error(error);
      }
    );
  };
}

module.exports = SendMail;
