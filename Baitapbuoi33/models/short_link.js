'use strict';
const {
  Model, NUMBER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class short_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      short_link.hasOne(models.User, {foreignKey: "shorten_id"})
    }
  }
  short_link.init({
    id:{
      type:DataTypes.NUMBER,
      primaryKey:true
    },
    shorten: DataTypes.STRING,
    original: DataTypes.STRING,
    views: {
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'short_link',
  });
  return short_link;
};