const { syncDB, setTestDate } = require('./database/sync')

syncDB().then(() => {
    setTestDate()
})
