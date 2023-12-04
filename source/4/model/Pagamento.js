import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'
import { Residente } from './Residente.js';

export class Pagamento extends Model {
}

Pagamento.init({
	importo: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	versato: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	sequelize
});

Pagamento.belongsTo(Residente, { foreignKey: 'idResidente' });
