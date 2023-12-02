'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User2.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User2',
  });
  User2.belongsToMany(models.Condomini, { through: 'CondominiUsers', foreignKey: 'userId', otherKey: 'condominioId', as: 'condomini' });

  User.hasMany(models.Pagamento, {
    foreignKey: 'UserId', // Chiave esterna in Pagamento riferita a User
    as: 'pagamenti', // Alias per l'accesso più agevole
  });
  return User2;
};