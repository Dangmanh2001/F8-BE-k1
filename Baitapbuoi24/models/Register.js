const { DataTypes } = require("sequelize");

const Register = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Register();
