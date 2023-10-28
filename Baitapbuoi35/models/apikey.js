"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Apikey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Apikey.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Apikey",
    }
  );
  return Apikey;
};
