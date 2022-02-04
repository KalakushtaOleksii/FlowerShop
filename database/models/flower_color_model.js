const {  DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const FlowerColor = sequelize.define('FlowerColor',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        schema: 'FlowerShop',
        tableName: 'flower_color',
        timestamps: false,
    }
)
module.exports = FlowerColor