var express = require('express');
var mainController = require('../controllers/ApiController');
var router = express.Router();

/* Consultar registro. */
router.get('/allCharacters', mainController.allCharacters);
router.get('/characters/:nombre/:lugar', mainController.charactersPlaces);
router.get('/allVehicle', mainController.allVehicle);

/* Crear registro. */
router.post('/createCharacters', mainController.createCharacters);

/* Actualizar registro. */
router.put('/updateCharacters/:id', mainController.updateCharacters);


module.exports = router;
