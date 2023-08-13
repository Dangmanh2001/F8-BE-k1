const Base = require("../Base/Base");

class Tutorial extends Base {
  index = (req, res) => {
    this.render(req, res, "tutorial");
  };
}

module.exports = new Tutorial();
