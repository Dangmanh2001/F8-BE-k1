const flash = require("connect-flash");
const jwt = require("jsonwebtoken");
const model = require("../models/index");
const User = model.User;
const bcrypt = require("bcrypt");

module.exports = {
  reset: (req, res) => {
    const { token } = req.params;

    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        err = {
          name: "TokenExpiredError",
          message: "jwt expired",
          expiredAt: 1408621000,
        };
        res.send("Link đã hết hạn");
      } else {
        const err = req.flash("err");
        const success = req.flash("success");
        res.render("resetPass/resetP", { err, success });
      }
    });
  },

  handleReset: async (req, res) => {
    const { password1, password2 } = req.body;
    const { token } = req.params;
    console.log(password1, password2);

    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        err = {
          name: "TokenExpiredError",
          message: "jwt expired",
          expiredAt: "2023-10-07T21:03:23.000Z",
        };
        res.send("Link đã hết hạn");
      } else {
        if (password1 !== password2) {
          req.flash("err", "Mật khẩu không giống nhau");
          res.redirect("/reset/" + token);
        } else if (!password1 || !password2) {
          req.flash("err", "Nhập đầy đủ thông tin");
          res.redirect("/reset/" + token);
        } else {
          var decoded = jwt.verify(token, "secret");
          console.log(jwt);
          if (decoded) {
            const saltRounds = 10;
            const hash = password2;
            bcrypt.hash(password2, saltRounds, async function (err, hash) {
              await User.update(
                { password: hash },
                {
                  where: {
                    id: decoded.data,
                  },
                }
              );
              req.flash("success", "Đổi mật khẩu thành công");
              res.redirect("/reset/" + token);
            });
          }
        }
      }
    });
  },
};
