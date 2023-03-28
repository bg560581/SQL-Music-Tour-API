'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Events.init({
    event_id: DataTypes.INTEGER,
    event_name: DataTypes.STRING,
    venue: DataTypes.TEXT,
    event_date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Events;
};