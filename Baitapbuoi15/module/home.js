const Base = require("../Base/Base");

class Home extends Base {
  index = (req, res) => {
    this.render(req, res, "home");
  };
}

module.exports = new Home();
