const { DataTypes } = require("sequelize");

const Customer = async () => {
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
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Customer();
