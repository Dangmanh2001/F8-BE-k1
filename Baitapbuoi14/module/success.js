const Core = require("../Core/Core");
const fs = require("fs");
class Success extends Core {
  index = (req, res) => {
    this.render(req, res, "success");
  };
}

module.exports = new Success();
