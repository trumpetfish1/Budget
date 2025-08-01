express = require('express')
app = express()
PORT = 4001
app.listen(PORT)
console.log(`listening on port ${PORT}`)


app.get('/', (req, res, next) => {
    res.send('hello world')
});