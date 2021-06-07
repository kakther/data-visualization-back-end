const express = require('express')
const tracker = express.Router()
const Entry = require('../models/tracker.js')



tracker.get('/', (req, res) => {
    Entry.find({}, (err, trackerEntry) => {
        res.json(trackerEntry)
    })
})


tracker.post('/', (req, res) => {
    Entry.create(req.body, (err, createEntry) => {
        Entry.find({}, (err, trackerEntry) => {
            res.json(trackerEntry)
        })
    })
})

tracker.put('/:id', (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, updateEntry) => {
            if(err){
                res.send(err)
            }else{
                Entry.find({}, (err, foundEntry) => {
                    res.json(foundEntry)
                })
            }
        })

})


tracker.delete('/:id', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        Entry.find({}, (err, foundEntry) => {
            res.json(foundEntry)
        })
    })
})


module.exports = tracker;