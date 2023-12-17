import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'

export class Residente extends Model {
}

Residente.init({
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cognome: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize
});
