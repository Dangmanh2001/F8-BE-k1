const model = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await model.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { JWT_SECRET, JWT_EXPIRE } = process.env;
    const token = jwt.sign(
      {
        data: {
          userId: user.id,
        },
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRE * 60 }
    );
    res.json({
      status: "success",
      accessToken: token,
    });
  },
  profile: async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    const { JWT_EXPIRE, JWT_SECRET } = process.env;

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log(decoded);
      if (!decoded) {
        const { userId } = decoded.data;
        const user = await model.User.findByPk(userId);
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        res.json({ status: "success", data: user });
      }
    } catch (error) {
      res.status(401).json({
        status: "error",
        message: "Authorization Failed",
      });
    }
  },
};
