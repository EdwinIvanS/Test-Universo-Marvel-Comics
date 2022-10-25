var express = require('express');
var mainController = require('../controllers/ApiController');
var router = express.Router();

/* Consultar registro. */
router.get('/allCharacters', mainController.allCharacters);
router.get('/Character/:id', mainController.Character);
router.get('/allVehicle', mainController.allVehicle);

/* Crear registro. */
router.post('/createCharacters', mainController.createCharacters);

/* Actualizar registro. */
router.put('/updateCharacters/:id', mainController.updateCharacters);


module.exports = router;
