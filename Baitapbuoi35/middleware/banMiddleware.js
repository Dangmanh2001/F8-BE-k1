const model = require("../models/index");
module.exports = async (req, res, next) => {
  const { id } = req.params;
  const user = await model.User.findByPk(id);
  console.log(user.ban);
  if (user.ban) {
    res.status(429).json({
      status: "Error",
      error: "Forbidden",
    });
  } else {
    next();
  }
};
