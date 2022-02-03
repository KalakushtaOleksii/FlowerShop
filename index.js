const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT= 3001

const flowerListController = require('./controlers/flawer-list.controller')
const flowerByIdControlers = require('./controlers/flower-by-id.controlers')
const userListController = require('./controlers/user-list.controller')
const flowerRemainderController = require('./controlers/flowerRemainder-controller')

const {request} = require("express")

const { sequelize } = require('./database')
const { QueryTypes } = require('sequelize')

// const Flover = require('./database/models/flowers_model')
//
// Flover.create({
//     title: 'Fialka',
//     flower_remainder: 18,
//     color_id: 4,
// })



// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
//
// app.get('/flowers', flowerListController)
// app.get('/flowers/:id', flowerByIdControlers)
// app.get('/users', userListController)
// app.get('/flowersRemainder/:flowerRemainder', flowerRemainderController)
//
//
//
// app.listen(PORT, () => {
//     console.log(`Example app listen on http://localhost:${PORT}`)
// })

//sequelize.query('SELECT * FROM "FlowerShop".flowers WHERE flowerremainder > 25', {type:QueryTypes.SELECT})
//    .then((result) => console.log(result))
