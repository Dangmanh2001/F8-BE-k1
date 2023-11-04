const { v4: uuid } = require("uuid");
const fs = require("fs");
const model = require("../models/index");
const path = require("path");
module.exports = {
  index: async (req, res) => {
    var cookie = req.cookies;
    if (!fs.existsSync("./cache")) {
      fs.mkdirSync("./cache");
    }

    if (!Object.keys(cookie).length) {
      const users = await model.User.findAll();
      const name = uuid();
      var randomNumber = Math.random().toString();
      randomNumber = randomNumber.substring(2, randomNumber.length);
      res.cookie(name, randomNumber, { maxAge: 900000, httpOnly: true });
      fs.writeFileSync("./cache/" + name + ".json", JSON.stringify(users));
      res.render("users/user", { users });
    }

    if (Object.keys(cookie).length) {
      const fileName = Object.keys(cookie);
      const data = fs.readFile(
        "./cache/" + fileName.toString() + ".json",
        "utf8",
        async function (err, data) {
          if (err) {
            const users = await model.User.findAll();
            fs.writeFileSync(
              "./cache/" + fileName + ".json",
              JSON.stringify(users)
            );
            res.render("users/user", { users });
          } else {
            const users = JSON.parse(data);
            res.render("users/user", { users });
          }
        }
      );
    }
  },
};
