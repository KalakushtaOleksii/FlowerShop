const flowersMocks = require('../mocks/flower.mocks')


function flowerByIdControlers(reg, res){
    const id  = Number(reg.params.id)

    res.json (flowersMocks.find( (flower) => flower.id === id))

}

module.exports = flowerByIdControlers