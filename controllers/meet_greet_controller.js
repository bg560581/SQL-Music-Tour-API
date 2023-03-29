// DEPENDENCIES
const meet_greet = require('express').Router()
const db = require('../models')
const { Meet_greets } = db 

// FIND ALL BANDS
meet_greet.get('/', async (req, res) => {
    try {
        const foundBands = await Meet_greets.findAll()
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND
meet_greet.get('/:id', async (req, res) => {
    try {
        const foundBand = await Meet_greets.findOne({
            where: { meet_greet_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BAND
meet_greet.post('/', async (req, res) => {
    try {
        const newBand = await Meet_greets.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
meet_greet.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Meet_greets.update(req.body, {
            where: {
                meet_greet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
meet_greet.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Meet_greets.destroy({
            where: {
                meet_greet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = meet_greet
