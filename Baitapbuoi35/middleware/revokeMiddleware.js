const model = require("../models/index");
module.exports = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const authCheck = await model.Apikey.findOne({
    where: {
      value: apiKey ?? "",
    },
  });
  if (!authCheck) {
    res.status(401).json({
      status: "error",
      message: "Unauthorize",
    });
  } else {
    next();
  }
};
