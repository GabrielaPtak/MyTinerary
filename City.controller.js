const City = require("./City.model")

const getCities = (req,res) =>{

  City
  .find({}).then((Cities)=>{res.json(Cities).status(204)})



}

const getCity = (req,res) =>{

City
.find({_id:req.params.NombreCiudad}).then((Cities)=>{res.json(Cities).status(204)})


}

module.exports={

  getCity,
  getCities


}