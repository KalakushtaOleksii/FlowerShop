function Flower(id, title, flowerColor, flowerRemainder){
    return {
        id,
        title,
        flowerColor,
        flowerRemainder,
    }
}
const flowers = [
    new Flower(1, 'Roza', 'Red', 15 ),
    new Flower(2, 'Roza', 'White', 10 ),
    new Flower(3, 'Lily', 'White', 25 ),
    new Flower(4, 'Chamomile', 'Yellow', 55 ),
    new Flower(5, 'Chrysanthemum', 'Pink', 2 ),
]

module.exports = flowers