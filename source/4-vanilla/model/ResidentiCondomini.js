import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index.js'
import { Condominio } from './Condominio.js';
import { Residente } from './Residente.js';

export class ResidentiCondomini extends Model {
}

ResidentiCondomini.init({ }, { sequelize });

Condominio.belongsToMany(Residente, { through: ResidentiCondomini });
Residente.belongsToMany(Condominio, { through: ResidentiCondomini });