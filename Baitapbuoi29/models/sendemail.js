"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sendEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sendEmail.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      email_send_to: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "sendEmail",
    }
  );
  return sendEmail;
};
