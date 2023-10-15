const model = require("../models/index");
const User = model.User;

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.render("user/index", { users });
  },

  permission: (req, res) => {
    res.render("user/permission");
  },
  handlePermission: async (req, res) => {
    // const permission = req.body.permission;
    // const role = req.body.role;
    const { permission, role } = req.body;

    const Role = await model.Role.create({ name: role });

    const Permissions = await model.Permission.findAll({
      where: { value: permission },
    });
    console.log(Permissions);
    if (Permissions?.length) {
      for (let i = 0; i < Permissions.length; i++) {
        await Permissions[i].addRole(Role);
      }
    }

    res.send("handlePermission");
  },
};
