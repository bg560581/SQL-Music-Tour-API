// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band } = db

bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order:[['availablestart time', 'ASC']]
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC BAND
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findAll({
        where: { band_id: req.params.id }
    })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//CREATE A BAND
bands.post('/', async (req, res) =>{
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (error) {
        res.status
    }
})

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



//EXPORT
module.exports = bands