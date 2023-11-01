const bcrypt = require("bcrypt");
const model = require("../models/index");
const jwt = require("../utils/jwt");
const User = model.User;

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
      res.json({
        status: "Error",
        message: "Please enter email",
      });
      return;
    }
    if (!password) {
      res.json({
        status: "Error",
        message: "Please enter password",
      });
      return;
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.json({
        status: "Error",
        message: "Account does not exist",
      });
      return;
    }
    const { password: hash } = user;
    const pass = await bcrypt.compare(password, hash);
    if (!pass) {
      res.json({
        status: "Error",
        message: "Wrong password",
      });
      return;
    }

    const token = jwt.createToken({ userId: user.id });
    const refreshToken = jwt.createRefresh({ userId: user.id });
    await user.update(
      { refreshToken: refreshToken },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.json({
      status: "success",
      data: { token, refreshToken },
    });
  },
  profile: async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwt.decode(token);

      if (decoded) {
        const { userId } = decoded;
        const user = await User.findOne({
          where: {
            id: userId,
          },
        });
        if (!user.refreshToken) {
          res.json({
            status: "error",
            message: "Unable to authenticate",
          });
          return;
        }
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        res.json({ status: "success", data: user });
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },
};
