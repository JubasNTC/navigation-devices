'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Devices, {
        foreignKey: 'userId',
        as: 'devices',
      });
    }
  };
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING(100),
      field: 'full_name',
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return User;
};