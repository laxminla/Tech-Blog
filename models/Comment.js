const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
}
Comment.init ({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    comments: {
        type: DataTypes.STRING,
        validate: {
            lenth: [4]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    blogpost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogpost',
            key: 'id'
        }
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment', 
});

module.exports = Comment;