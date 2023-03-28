'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Venues.init({
    venue_id: DataTypes.INTEGER,
    venue_name: DataTypes.STRING,
    venue_location: DataTypes.STRING,
    venue_stages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venues;
};