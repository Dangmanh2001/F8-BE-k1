const model = require("../models/index");
const User = model.User;
const flash = require("connect-flash");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    const roles = await model.Role.findAll();
    res.render("user/index", { msg, roles });
  },

  permission: (req, res) => {
    const msg = req.flash("msg");
    res.render("user/permission", { msg });
  },
  handlePermission: async (req, res) => {
    const { permission, role } = req.body;
    const Role = await model.Role.create({ name: role });
    console.log(Role);

    const Permissions = await model.Permission.findAll({
      where: { value: permission },
    });
    console.log(Permissions);
    if (Permissions?.length) {
      for (let i = 0; i < Permissions.length; i++) {
        await Role.addPermission(Permissions[i]);
      }
    }
    req.flash("msg", "Thêm thành công");
    res.redirect("/users");
  },
  update: async (req, res) => {
    const id = req.params.id;
    const role = await model.Role.findByPk(id, { include: model.Permission });

    const data = role.Permissions.map((permission) => {
      return permission.value;
    });
    console.log(data.includes("Thêm"));
    res.render("user/updatePermission", { role, data });
  },
  handleUpdate: async (req, res) => {
    const { permission, role } = req.body;
    const id = req.params.id;
    await model.Role.update(
      { name: role },
      {
        where: {
          id: id,
        },
      }
    );
    const Role = await model.Role.findByPk(id);

    const Permissions = await model.Permission.findAll();
    const permissionUpdate = await model.Permission.findAll({
      where: { value: permission },
    });
    const data = Permissions.map((permission) => {
      return permission.value;
    });
    if (data?.length) {
      for (let i = 0; i < data.length; i++) {
        await Role.removePermission(
          await model.Permission.findOne({
            where: { value: data[i] },
          })
        );
      }

      for (let i = 0; i < permissionUpdate.length; i++) {
        await Role.addPermission(permissionUpdate[i]);
      }
    }
    req.flash("msg", "Sửa thành công");
    res.redirect("/users");
  },
};
