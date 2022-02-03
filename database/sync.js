const Flower = require ('./models/flowers_model')
const FlowerColor = require ('./models/flower_color_model')
const User = require('./models/user_model')
const Order = require('./models/orders_model')
const OrdersDetails = require('./models/orders_details_model')

function syncDB () {
    Flower.sync()
    FlowerColor.sync()
    User.sync()
    Order.sync()
    OrdersDetails.sync()
}


module.exports = {
    syncDB,
}