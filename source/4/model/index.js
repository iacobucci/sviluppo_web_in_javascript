import { Sequelize } from 'sequelize';

export class Condominio { }
export class Residente { }
export class Pagamento { }

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.sqlite'
});