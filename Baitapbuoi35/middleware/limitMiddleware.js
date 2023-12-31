const rateLimit = require("express-rate-limit");
module.exports = {
  apiLimiter: rateLimit({
    windowMs: 1000, // 1 minutes
    max: 2,
    handler: function (req, res, next) {
      res.status(429).send({
        status: 500,
        message: "Too many requests!",
      });
      return;
    },
  }),
};
