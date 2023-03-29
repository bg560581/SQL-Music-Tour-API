// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require ('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//CONTROLLERS
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const bandEventsController = require('./controllers/band_events_controller')
app.use('/band_events', bandEventsController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

const meetGreetController = require('./controllers/meet_greet_controller')
app.use('/meet_greet', meetGreetController)

const venuesController = require('./controllers/venues_controller')
app.use('/venues', venuesController)

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
        storage: process.env.PG_URI,
        dialect: 'postgres',
        username: 'postgres',
        password: 'PEppers_0119'
      })
    


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})