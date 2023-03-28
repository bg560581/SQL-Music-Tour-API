'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('venues', {
      venue_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      venue_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue_stages: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('venues');
  }
};