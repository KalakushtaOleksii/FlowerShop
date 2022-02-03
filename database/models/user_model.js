const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'full_name'
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        schema: 'FlowerShop',
        tableName: 'users_1',
        timestamps: false,
    }
)
module.exports = User