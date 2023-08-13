const fs = require("fs"); //Xử lý file
class Base {
  render = (req, res, path) => {
    fs.readFile(`./view/${path}.html`, "utf8", (err, data) => {
      res.end(data);
    });
  };
}

module.exports = Base;
