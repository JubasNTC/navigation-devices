'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      Device.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'device',
      });
    }
  };
  Device.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM(['ble', 'wifi', 'locator', 'wifi_rtt']),
    },
    mac: {
      allowNull: false,
      unique: true,
      is: /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i,
      type: DataTypes.STRING(17),
    },
  }, {
    sequelize,
    tableName: 'devices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Device;
};