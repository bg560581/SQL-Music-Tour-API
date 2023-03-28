'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bands.init({
    band_id: DataTypes.INTEGER,
    band_name: DataTypes.STRING,
    band_genre: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Bands;
};