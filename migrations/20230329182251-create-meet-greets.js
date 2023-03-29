'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meet_greet_id: {
        type: Sequelize.INTEGER
      },
      band_event: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      band_name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greet');
  }
};