const Base = require("../Base/Base");
const Session = require("../Base/Sessions");
const fs = require("fs");
class Auth extends Base {
  login = (req, res) => {
    const session = new Session(req, res);
    this.render(req, res, "app");
  };
}

module.exports = new Auth();
