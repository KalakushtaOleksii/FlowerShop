const Flower = require ('./models/flowers_model')
const FlowerColor = require ('./models/flower_color_model')
const User = require('./models/user_model')
const Order = require('./models/orders_model')
const OrdersDetails = require('./models/orders_details_model')

function syncDB () {
  return   Promise.all([
        Flower.sync(),
        FlowerColor.sync(),
        User.sync(),
        Order.sync(),
        OrdersDetails.sync()
    ])
}
function setFlowersTestDate(){
    Flower.create({
        title: 'Roza',
        flowerRemainder: 15,
        colorId: 1,
    })

    Flower.create({
        title: 'Roza',
        flowerRemainder: 10,
        colorId: 2,
    })

    Flower.create({
        title: 'Lily',
        flowerRemainder: 25,
        colorId: 2,
    })

    Flower.create({
        title: 'Chamomile',
        flowerRemainder: 55,
        colorId: 3,
    })

    Flower.create({
        title: 'Chrysanthemum',
        flowerRemainder: 2,
        colorId: 4,
    })
}

function setUsersTestDate(){
    return User.bulkCreate([
        {
            fullName: 'Krot Djon',
            age: 56,
            email: 'krot.djon@gmail.com',
        },
        {
            fullName: 'Ivanov Ivan',
            age: 56,
            email: 'ivanov_ivan@ukr.net',
        },
        {
            fullName: 'Pypkin Vovan',
            age: 16,
            email: 'pypkinvovan@mail.ru',
        },
    ])
}

function setFlowerColorsTestDate (){
    return FlowerColor.bulkCreate([
        {
            color: 'Red',
        },
        {
            color: 'White',
        },
        {
            color: 'Yellow',
        },
        {
            color: 'Pink',
        },
    ])
}

function setOrdersTestDate(){
    return Order.bulkCreate([
        {
            orderDate: new Date(),
            usersId: 1,
        },
        {
            orderDate: new Date(),
            usersId: 2,
        },
        {
            orderDate: new Date(2022,5, 1),
            usersId: 1,
        },
    ])
}

function setOrdersDetalisTestDateb (){
    return OrdersDetails.bulkCreate([
        {
            quantity: 11,
            flowerId: 4,
            orderId: 1,
        },
    ])
}



function setTestDate(){
    setFlowersTestDate()
    setUsersTestDate()
    setFlowerColorsTestDate()
    setOrdersTestDate()
    setOrdersDetalisTestDateb()
}
module.exports = {
    syncDB,
    setTestDate,
}