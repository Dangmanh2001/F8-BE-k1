const Base = require("../Base/Base");
const Session = require("../Base/Sessions");

class Auth extends Base {
  login = (req, res) => {
    const session = new Session(req, res);

    res.end("Login");
  };
}

module.exports = new Auth();
