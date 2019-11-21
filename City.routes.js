  
const router = require('express').Router()
const CityController = require('./City.controller')


router.get("/cities/City",CityController.getCities)
router.get("/cities/Cities/:NombreCiudad",CityController.getCity)



module.exports = router