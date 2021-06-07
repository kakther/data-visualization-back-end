const mongoose = require('mongoose')

const trackerSchema = new mongoose.Schema(
    {
        text: String,
        amount: Number
    },
    {timestamps: true}
)

const Tracker = mongoose.model('Tracker', trackerSchema)
module.exports = Tracker