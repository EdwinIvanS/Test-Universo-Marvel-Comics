var express = require('express');
var mainController = require('../controllers/ApiController');
var router = express.Router();

/* Consultar registro. */
router.get('/allCharacters', mainController.allCharacters);
router.get('/characters/:id/?lugar', mainController.characters);
router.get('/listVehicle', mainController.listVehicle);

/* Crear registro. */
router.post('/createCharacters', mainController.createCharacters);

/* Actualizar registro. */
router.put('/updateCharacters', mainController.updateCharacters);


module.exports = router;
