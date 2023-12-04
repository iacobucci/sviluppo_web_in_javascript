// 'use strict';
// // const {
// //   Model
// // } = require('sequelize');

// import { Model } from "sequelize";


// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     username: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


import { Model, DataTypes } from "sequelize";
// import sequelize 

export default class User extends Model {
  static associate(models) {
    // define association here
  }
}

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
});



// export default {
//   name: 'User',
//   fields: {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING
//     }
//   },
//   options: {
//     tableName: "users",
//     createdAt: "date_created",
//     updatedAt: "date_modified",
//   }
// };
