// DEPENDENCIES
const band_events = require('express').Router()
const db = require('../models')
const { Band_events } = db 

// FIND ALL events
band_events.get('/', async (req, res) => {
    try {
        const foundBands_events = await Band_events.findAll()
        res.status(200).json(foundBands_events)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC event
band_events.get('/:id', async (req, res) => {
    try {
        const foundBand_event = await Band_events.findOne({
            where: { band_event_id: req.params.id }
        })
        res.status(200).json(foundBand_event)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A event
band_events.post('/', async (req, res) => {
    try {
        const newBand_event = await Band_events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand_event
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A event
band_events.put('/:id', async (req, res) => {
    try {
        const updatedBands_event = await Band_events.update(req.body, {
            where: {
                band_event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands_event} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A event
band_events.delete('/:id', async (req, res) => {
    try {
        const deletedBands_event = await Band_events.destroy({
            where: {
                band_event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands_event} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = band_events
