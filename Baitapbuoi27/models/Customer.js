"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  }
  Customer.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.NUMBER,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
