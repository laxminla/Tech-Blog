const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
   
    
  }

  User.init(
      {
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [5]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            } 
        }
      },

    {  sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',}
       
)

module.export = User;

