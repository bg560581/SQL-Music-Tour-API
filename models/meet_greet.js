'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greet.init({
    meet_greet_id: DataTypes.INTEGER,
    band_event: DataTypes.STRING,
    time: DataTypes.INTEGER,
    band_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meet_greet',
  });
  return Meet_greet;
};