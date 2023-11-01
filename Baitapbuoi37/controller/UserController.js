const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");

module.exports = {
  login: (req, res) => {
    res.render("users/login");
  },

  handleLogin: async (req, res) => {
    const emails = [
      { name: "manh123", email: "phaodai2000@gmail.com" },
      { name: "manh456", email: "phaodai2000@gmail.com" },
      { name: "manh789", email: "phaodai2000@gmail.com" },
    ];
    const email = emails.forEach((e) => {
      const name = e.name;
      const email = e.email;
      new Event(
        new SendMail({
          name,
          email,
        })
      );
    });

    // const { email, name } = req.body;

    res.send("Hello");
  },
};
