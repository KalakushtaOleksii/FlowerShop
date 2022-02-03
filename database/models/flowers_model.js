const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Flower = sequelize.define('Flower',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    flowerRemainder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'flower_remainder',
    },
    colorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'color_id'
    },
},
    {
        schema: 'FlowerShop',
        tableName: 'flowers_1',
        timestamps: false,
    }
)
module.exports = Flower