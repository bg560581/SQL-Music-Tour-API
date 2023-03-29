'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('band_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_event_id: {
        type: Sequelize.INTEGER
      },
      band_name: {
        type: Sequelize.STRING
      },
      event_name: {
        type: Sequelize.STRING
      },
      stages: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('band_events');
  }
};