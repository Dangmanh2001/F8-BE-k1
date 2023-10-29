const multer = require("multer");
var path = require("path");
const model = require("../models/index");
const jwt = require("jsonwebtoken");

module.exports = {
  upload: async (req, res) => {
    const files = req.files.fileName;
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    const { JWT_SECRET, JWT_EXPIRE } = process.env;
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      const { userId } = decoded.data;

      if (files) {
        files.forEach(async (e) => {
          const fileUpload = await model.Fileupload.findOne({
            where: { name: e.originalname },
          });
          if (!fileUpload) {
            await model.Fileupload.create({
              name: e.originalname,
              mimetype: e.mimetype,
              link: path.join(__dirname, "../uploads/" + e.filename),
              user_id: userId,
            });
          }
        });
      }
    }
    res.json({
      status: "success",
      message: "The file has been uploaded",
    });
  },
  index: async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    const { JWT_SECRET, JWT_EXPIRE } = process.env;
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      const { userId } = decoded.data;
      const data = await model.Fileupload.findAll({
        where: {
          user_id: userId,
        },
      });
      res.json({
        status: "success",
        data: data,
      });
    }
  },
};
