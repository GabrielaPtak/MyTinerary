const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://Gaby:Genia100@cluster0-uciwh.mongodb.net/cities?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=>{console.log("conect")})
.catch((err)=>{console.log('Error ',err.message)});

const db = mongoose.connection;


module.exports= db;