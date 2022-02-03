const flowersMocks = require('../mocks/flower.mocks')
const result = 'Такої кількості квітів не має в наявності'
function flowerRemainderController (reg, res) {
    const flowerRemainder = Number(reg.params.flowerRemainder)
        res.json(flowersMocks.filter((flowers) => flowers.flowerRemainder >= flowerRemainder) )
}
module.exports = flowerRemainderController