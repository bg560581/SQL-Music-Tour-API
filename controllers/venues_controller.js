// DEPENDENCIES
const venues = require('express').Router()
const db = require('../models')
const { Venues } = db 

// FIND ALL VENUES
venues.get('/', async (req, res) => {
    try {
        const foundVenues = await Venues.findAll()
        res.status(200).json(foundVenues)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC VENUE
venues.get('/:id', async (req, res) => {
    try {
        const foundVenue = await Venues.findOne({
            where: { venue_id: req.params.id }
        })
        res.status(200).json(foundVenue)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A VENUE
venues.post('/', async (req, res) => {
    try {
        const newVenue = await Venues.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newVenue
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A VENUE
venues.put('/:id', async (req, res) => {
    try {
        const updatedVenue = await Venues.update(req.body, {
            where: {
                venue_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedVenue} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A VENUE
venues.delete('/:id', async (req, res) => {
    try {
        const deletedVenue = await Venues.destroy({
            where: {
                venue_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedVenue} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = venues
