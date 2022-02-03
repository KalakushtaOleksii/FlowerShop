const flowersMocks = require('../mocks/flower.mocks')


function flowerListController (reg, res){
    res.json(flowersMocks)
}

module.exports = flowerListController