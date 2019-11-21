const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require("cors");
const routerCity = require('./City.routes')

app.use(cors())

app.use(routerCity)

var router = express.Router();

router.get("/Home", function(req,res) { 

  res.send("hola como estas")
} )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db
app.use("/", router);
app.listen(8080);



/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();
app.get('/', (req,res) => res.send("HELLO WORLD"));
const port= process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`)); */









