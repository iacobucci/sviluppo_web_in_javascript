const { Sequelize, Model, DataTypes } = require('sequelize');
// Option 2: Passing parameters separately (sqlite)

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.sqlite'
});

class User extends Model {
	getAge() {
		return this.age;
	}
}

User.init({
	// Model attributes are defined here
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	age: {
		type: DataTypes.INTEGER
	}
}, {
	// Other model options go here
	sequelize, // We need to pass the connection instance
	modelName: 'Users' // We need to choose the model name
});


(async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log('Connection has been established successfully.');
		await User.create({ username: 'janedoe', age: 30 });
		User.findAll().then(users => {
			users.forEach(user => {
				console.log(user.getAge());
			});
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();
