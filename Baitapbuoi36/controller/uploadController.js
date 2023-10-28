const multer = require("multer");
var path = require("path");
const model = require("../models/index");

module.exports = {
  upload: async (req, res) => {
    const files = req.files.fileName;

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
          });
        }
      });
    }

    res.json({
      status: "success",
      message: "The file has been uploaded",
    });
  },
  index: async (req, res) => {
    const data = await model.Fileupload.findAll();
    res.json({
      status: "success",
      data: data,
    });
  },
};
