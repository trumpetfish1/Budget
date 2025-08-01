express = require('express')
app = express()
PORT = 4001
app.listen(PORT)
console.log(`listening on port ${PORT}`)


app.get('/', (req, res, next) => {
    res.send('hello world')
}); 

app.post('/', (req, res, next) => {
    toPost = req.body 
    console.log(toPost)
}); 