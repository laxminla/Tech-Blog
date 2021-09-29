const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blogPost extends Model {
   
    
}

blogPost.init(
    {
      id: {
          type: DataTypes.INTEGER,
          PrimaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 40]
          }
      },
      entry: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [8]
          } 
      },

      data_published: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW


      },
      author: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id'
          }
      }
    },

  {  sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'blogPost',}
     
)

module.exports = BlogPost;