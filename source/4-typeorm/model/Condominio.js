import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'

export class Condominio extends Model {
}

Condominio.init({
	via: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize
});