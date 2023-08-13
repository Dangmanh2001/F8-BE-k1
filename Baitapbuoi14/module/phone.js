const Core = require("../Core/Core");

class Phone extends Core {
  index = (req, res) => {
    this.render(req, res, "phone");
    const method = req.method;
    if (method === "GET") {
      this.render(req, res, "phone");
    } else if (method === "POST") {
      req.on("data", (buffer) => {
        const body = buffer.toString();
        let phone = "";
        const errors = {};

        if (body) {
          const bodyObj = new URLSearchParams(body);
          phone = bodyObj.get("phone");
          if (!phone) {
            console.log(errors.phone);
            errors.phone = "Vui lòng nhập số điện thoại";
          }
          if (phone.length < 9) {
            console.log(errors.phone);
            errors.phone = "Số điện thoại phải từ 9 tới 11 số";
          }
          if (phone.length > 11) {
            console.log(errors.phone);
            errors.phone = "Số điện thoại phải từ 9 tới 11 số";
          }
          if (phone) {
            const data = fs.readFileSync("./data/data.json");

            const jsonData = JSON.parse(data);
            jsonData.focus.phone = `${phone}`;
            fs.writeFileSync("./data/data.json", JSON.stringify(jsonData));
          }
          this.render(req, res, "phone", {
            "errors.phone": errors.phone ?? "",
          });
        }
      });
    }
  };
}

module.exports = new Phone();
