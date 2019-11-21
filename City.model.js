const mongoose= require('mongoose');
const CitySchema= new mongoose.Schema({

  nombre: String


})

module.exports=mongoose.model('cities',CitySchema)

