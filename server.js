//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


const app = express()
require('dotenv').config()

app.use(express.json())
const trackerController = require('./controllers/tracker.js')
app.use('/tracker', trackerController)



app.get('/', (req, res) => res.send('hello world'))
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
