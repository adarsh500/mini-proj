const express = require('express');
const route = express.Router();

const controller = require('../controllers/controller');

//api routes
route.post('/api/criminal', controller.createcriminal);
route.post('/api/crime', controller.createcrime);
route.post('/api/fir', controller.createfir);
route.post('/api/victim', controller.createvictim);

route.get('/api/fir', controller.findAllFirs);
route.get('/api/crime', controller.findAllCrime);
route.get('/api/criminal', controller.findAllcriminals);
route.get('/api/victim', controller.findAllVictim);

route.delete('/api/fir/:id', controller.deleteFir);
route.delete('/api/crime/:id', controller.deleteCrime);
route.delete('/api/criminal/:id', controller.deleteCriminal);
route.delete('/api/victim/:id', controller.deleteVictim);

route.put('/api/fir/:id', controller.updateFir)
route.put('/api/crime/:id', controller.updateCrime)
route.put('/api/criminal/:id', controller.updateCriminal)
route.put('/api/victim/:id', controller.updateVictim)

route.get('/api/fir/:id', controller.findFirId);

module.exports = route;
