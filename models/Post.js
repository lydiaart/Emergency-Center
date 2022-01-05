const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contents: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(12, 8),
        allowNull: true
    },
    longitude: {
        type: DataTypes.DECIMAL(12, 8),
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = Post;