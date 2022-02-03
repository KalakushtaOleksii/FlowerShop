const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const OrdersDetails = sequelize.define('OrdersDetails',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        flowerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'flower_id',
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'order_id'
        },
    },
    {
        schema: 'FlowerShop',
        tableName: 'orders_details_1',
        timestamps: false,
    }
)
module.exports = OrdersDetails