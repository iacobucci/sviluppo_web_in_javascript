'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pagamento.init({
    versato: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER,
    totale: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagamento',
  });

  Pagamento.belongsTo(models.User, {
    foreignKey: 'UserId', // Chiave esterna riferita a User
    as: 'user', // Alias per l'accesso più agevole
  });
  return Pagamento;
};