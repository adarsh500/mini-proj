const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')


//api routes
route.post('/api/criminal', controller.createcriminal)
route.post('/api/crime', controller.createcrime)
route.post('/api/fir', controller.createfir)
route.post('/api/victim', controller.createvictim)

module.exports = route