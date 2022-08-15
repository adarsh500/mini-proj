const express = require('express');
const route = express.Router();

const controller = require('../controllers/controller');

//api routes
route.post('/api/criminal', controller.createcriminal)
route.post('/api/crime', controller.createcrime)
route.post('/api/fir', controller.createfir)
route.post('/api/victim', controller.createvictim)

route.get('/api/fir', controller.findAllFirs)
route.get('/api/crime', controller.findAllCrime)
route.get('/api/criminal', controller.findAllcriminals)
route.get('/api/victim', controller.findAllVictim)

route.get('/api/fir/:id', controller.findFirId)


module.exports = route;
