'use strict';
const { Model } = require('sequelize');
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
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    venue_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    venue_location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    venue_stages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    }, {
    sequelize,
    modelName: 'Meet_greets',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Venues;
};