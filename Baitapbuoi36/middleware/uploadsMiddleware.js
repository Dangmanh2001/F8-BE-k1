const multer = require("multer");
module.exports = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  var upload = multer({ storage: storage }).fields([
    { name: "fileName", maxCount: 3 },
  ]);
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
    } else if (err) {
    } else {
      next();
    }

    // Everything went fine.
  });
};
