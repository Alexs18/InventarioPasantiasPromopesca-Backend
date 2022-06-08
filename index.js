const server = require('express');
const conexion = require('./src/Connection/ConexionSQL');
const cors = require('cors');


const app = server();
app.use(cors());
const port = 4000;

//app.use()

app.get('/', async (req, res)=>{
    let dataresult = await conexion();
    res.send(dataresult);
});

app.listen(port, ()=>{
    console.log(`we are running application ${process.env.application_name}`);
});