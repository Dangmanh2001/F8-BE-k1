const fs = require("fs");
class Desc {
  render = (req, res, data = {}) => {
    fs.readFile("index.html", "utf8", (err, view) => {
      const result = view.match(/{.+?}/g);
      if (result.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");

          if (
            typeof data[itemKey] === "object" &&
            !Array.isArray(data[itemKey]) &&
            data[itemKey] !== null
          ) {
            view = view.replaceAll(item, itemKey);
            // console.log(view);
            let str = "";
            for (let i in data[itemKey]) {
              str += `<li>${data[itemKey][i]}</li>`;
            }
            console.log(str);
            view = view.replaceAll(itemKey, `${itemKey}:${str}`);
          }
          view = view.replaceAll(item, `${itemKey}:${data[itemKey]}`);
        }
      }

      res.end(view);
    });
  };
}
module.exports = Desc;
