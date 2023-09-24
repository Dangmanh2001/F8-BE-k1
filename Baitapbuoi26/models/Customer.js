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
      // define association here
    }
  }
  Customer.init(
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
        type: DataTypes.NUMBER,
      },

      province_id: {
        type: DataTypes.NUMBER,
      },

      created_at: {
        type: DataTypes.DATE,
      },

      updated_at: {
        type: DataTypes.DATE,
      },

      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
      createdAt: "created_at",
      timestamps: true,
      tableName: "customers",
      paranoid: true,
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
