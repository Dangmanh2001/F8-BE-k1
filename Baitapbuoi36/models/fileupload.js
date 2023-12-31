"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fileupload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fileupload.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Fileupload.init(
    {
      name: DataTypes.STRING,
      mimetype: DataTypes.STRING,
      link: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Fileupload",
    }
  );
  return Fileupload;
};
