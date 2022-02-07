const { syncDB, setTestDate, getModelsThatDontExist } = require('./database/sync')

getModelsThatDontExist().then(console.log)

// syncDB().then(() => {
//      setTestDate()
// })
