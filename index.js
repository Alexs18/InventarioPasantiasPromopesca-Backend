const express = require('express');
const ConectedDatabase = require('./src/database/ConexionSQL');
const compression =require("compression")
const cors = require('cors');
const {StockRouter} = require('./src/routes/StockproductRouter');
let path = require('path');


const app = express();
app.use(compression())
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "html")

app.use(express.static(path.join(__dirname +"./src/public/view")));
app.use(express.json({limit:'100mb'}));
app.use(express.urlencoded());
app.use(cors());
app.use(StockRouter());


/**Activamos el servidor en el puerto de escucha 8080 */
app.listen(process.env.portrunning, ()=>{
    console.log(`we are running application ${process.env.application_name}
    please inside to the localhost:8080/`);
});