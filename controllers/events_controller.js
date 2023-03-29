// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Events } = db 

// FIND ALL BANDS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Events.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BAND
events.post('/', async (req, res) => {
    try {
        const newEvent = await Events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Events.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvent} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Events.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = events
