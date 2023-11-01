const model = require("../models/index");
const jwt = require("../utils/jwt");
const blacklist = model.Blacklist;
const user = model.User;
module.exports = {
  logout: async (req, res) => {
    const { authorization } = req.headers;

    const decode = jwt.decode(authorization.replace("Bearer", "").trim());
    await blacklist.create({
      accessToken: authorization,
      userId: decode.userId,
    });

    await user.update(
      { refreshToken: null },
      {
        where: {
          id: decode.userId,
        },
      }
    );
    console.log(decode);
    res.json({
      status: "success",
      message: "Signed out successfully",
    });
  },
};
