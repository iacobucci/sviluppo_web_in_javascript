'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condominio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Condominio.init({
    nome: DataTypes.STRING,
    via: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Condominio',
  });
  return Condominio;
};