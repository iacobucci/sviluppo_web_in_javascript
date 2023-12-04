import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'
import { Condominio } from './Condominio.js';
import { Residente } from './Residente.js';

export class ResidentiCondomini extends Model {
}

ResidentiCondomini.init({
	idCondominio: {
		type: DataTypes.INTEGER,
		allowNull: true // deve essere true per permettere di inserire un record con idCondominio null
	},
	idResidente: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
}, {
	sequelize
});

Condominio.belongsToMany(Residente, { through: ResidentiCondomini });
Residente.belongsToMany(Condominio, { through: ResidentiCondomini });