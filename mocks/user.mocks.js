function User(id, name){
    return {
        id,
        name,
    }
}
const users = [
    new User(1, 'Djon' ),
    new User(2, 'Ivan' ),
    new User(3, 'Vovan' ),

]

module.exports = users