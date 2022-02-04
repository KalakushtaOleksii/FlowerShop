const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Order = sequelize.define('Order',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'order_date'
        },
        usersId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'users_id'
        },
    },
    {
        schema: 'FlowerShop',
        tableName: 'orders',
        timestamps: false,
    }
)
module.exports = Order