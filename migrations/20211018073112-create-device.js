'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(['ble', 'wifi', 'locator', 'wifi_rtt']),
      },
      mac: {
        allowNull: false,
        unique: true,
        is: /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i,
        type: Sequelize.STRING(17),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('devices');
  }
};