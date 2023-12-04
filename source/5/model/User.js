import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'
import { Residente } from './Residente.js';

export class User extends Model {
}

User.init({
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	admin: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, {
	sequelize
});

Residente.belongsTo(User, { foreignKey: 'idUser' });