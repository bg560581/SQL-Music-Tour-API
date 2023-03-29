'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band_events.init({
    band_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    }, {
    sequelize,
    modelName: 'Band_events',
    tableName: 'band_events',
    timestamps: false
  })
;
  return Band_events;
};