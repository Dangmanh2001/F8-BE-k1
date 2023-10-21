const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const { isRole } = require("../utils/permisson");
const permissionMiddleware = require("../middlewares/permissionMiddleware")
const permissionUtil = require("../utils/permisson")

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    const permissions= await permissionMiddleware.role(req,res)
    console.log(permissions)
    res.render("users/index", { users,permissions,permissionUtil });
  },

  permission: async (req, res) => {
    const { id } = req.params;
    const roles = await Role.findAll();
    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Role,
      },
    });

    //Enhanced Literal Object
    res.render("users/permission", { roles, user, isRole });
  },

  handlePermission: async (req, res) => {
    let { roles } = req.body;
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.redirect("/users");
      return;
    }

    if (roles) {
      roles = typeof roles === "string" ? [roles] : roles;

      const roleUpdate = await Promise.all(
        roles.map((roleId) =>
          Role.findOne({
            where: {
              id: roleId,
            },
          }),
        ),
      );

      await user.setRoles(roleUpdate);
    }

    res.redirect("/users");
  },
};
