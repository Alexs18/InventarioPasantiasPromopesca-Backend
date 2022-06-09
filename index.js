const express = require('express');
const conexion = require('./src/database/ConexionSQL');
const cors = require('cors');
const {StockRouter} = require('./src/routes/StockproductRouter');

const app = express();
app.use(express.json())
app.use(cors());
app.use(StockRouter())

app.listen(process.env.portrunning, ()=>{
    console.log(`we are running application ${process.env.application_name}
    please inside to the localhost:8080/`);
});