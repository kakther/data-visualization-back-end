//DEPENDENCIES
const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('hello world'))
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
