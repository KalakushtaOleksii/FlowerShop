const usersMock = require('../mocks/user.mocks')

function userListController (reg, res) {
    res.json(usersMock)
}
module.exports = userListController