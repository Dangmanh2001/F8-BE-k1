const { v4: uuidv4 } = require("uuid");
const model = require("../models/index");
module.exports = {
  login: async (req, res) => {
    const cookie = req.cookies;
    console.log(cookie);
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    res.render("login/login", { pageTitle: "Đăng nhập", msg, msgType });
  },
  getToken: async (req, res, next) => {
    const id = req.user.dataValues.id;
    const loginToken = uuidv4();

    const msg = req.flash("error");

    const token = await model.login_token.findOne({
      where: {
        userId: id,
      },
    });
    if (!token) {
      await model.login_token.create({ userId: id, token: loginToken });
      res.cookie("loginToken", loginToken);
    } else {
      await model.login_token.destroy({ where: { userId: id } });
    }

    next();
  },
};
