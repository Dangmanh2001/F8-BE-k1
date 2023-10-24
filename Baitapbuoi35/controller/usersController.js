const model = require("../models/index");
const bcrypt = require("bcrypt");
const validateEmail = function (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = {
  updatePut: async (req, res) => {
    const saltRounds = 10;

    let { name, email, password } = req.body;

    const { id } = req.params;

    const user_by_id = await model.User.findByPk(id);

    if (user_by_id) {
      if (!name) {
        res.status(401).json({
          status: "Error",
          err: "Nhập tên",
        });
        return;
      }
      if (!email) {
        res.status(401).json({
          status: "Error",
          err: "Nhập email",
        });
        return;
      }

      if (!password) {
        res.status(401).json({
          status: "Error",
          err: "Nhập pass",
        });
        return;
      } else {
        password = await bcrypt.hash(password, saltRounds);
      }
      if (!validateEmail(email)) {
        res.status(401).json({
          status: "Error",
          err: "Email không đúng định dạng",
        });
        return;
      }

      if (user_by_id?.email === email) {
        const user = await model.User.update(
          { name: name, email: email, password: password },
          {
            where: { id },
          }
        );
        res.json(user);
        return;
      } else {
        const users_by_email = await model.User.findOne({
          where: {
            email: email,
          },
        });
        if (users_by_email?.email === email) {
          res.status(401).json({
            status: "Error",
            err: "Email đã tồn tại",
          });
          return;
        } else {
          const user = await model.User.update(
            { name: name, email: email, password: password },
            {
              where: { id },
            }
          );
          res.json(user);
        }
      }
    } else {
      res.status(404).json({
        status: "Error",
        err: "Không có dữ liệu trong database",
      });
    }
  },
  updatePatch: async (req, res) => {
    const saltRounds = 10;

    const { id } = req.params;
    let { name, email, password } = req.body;
    if (!validateEmail(email)) {
      res.status(401).json({
        status: "Error",
        err: "Email không đúng định dạng",
      });
      return;
    }
    if (password) {
      password = await bcrypt.hash(password, saltRounds);
    }
    const user_by_id = await model.User.findByPk(id);
    if (user_by_id) {
      if (user_by_id?.email === email) {
        const user = await model.User.update(
          { name: name, email: email, password: password },
          {
            where: { id },
          }
        );
        res.json(user);
        return;
      } else {
        if (email) {
          const users_by_email = await model.User.findOne({
            where: {
              email: email,
            },
          });
          if (users_by_email?.email === email) {
            res.status(401).json({
              status: "Error",
              err: "Email đã tồn tại",
            });
            return;
          } else {
            const user = await model.User.update(
              { name: name, email: email, password: password },
              {
                where: { id },
              }
            );
            res.json(user);
          }
        } else {
          const user = await model.User.update(
            { name: name, email: email, password: password },
            {
              where: { id },
            }
          );
          res.json(user);
        }
      }
    } else {
      res.status(404).json({
        status: "Error",
        err: "Không có dữ liệu trong database",
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const user_by_id = await model.User.findByPk(id);
    if (user_by_id) {
      await model.User.destroy({
        where: {
          id: id,
        },
      });
      res.json({
        message: "Xóa thành công",
      });
    } else {
      res.status(404).json({
        status: "Error",
        err: "Không có dữ liệu trong database",
      });
    }
  },
};
