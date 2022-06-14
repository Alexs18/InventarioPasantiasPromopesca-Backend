const express = require('express');
const ConectedDatabase = require('./src/database/ConexionSQL');
const cors = require('cors');
let {SimpleQuery, InventoryQuery, inventori2, Seconduery} = require('./src/database/Query');
const {StockRouter} = require('./src/routes/StockproductRouter');
let path = require('path');


const app = express();
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "html")

app.use(express.static(path.join(__dirname +"./src/public/view")));
app.use(express.json());
app.use(cors({
    origin:["http://localhost:8080", "http://127.0.0.1:5500"]
}));
app.use(StockRouter())
app.get("/NuevoProducto", async(req, res, next)=> {
    try {
        let poolresult = await ConectedDatabase();
        let query = await poolresult.request().query(InventoryQuery);
        console.log("that petition was sucess");
        debugger;
        res.json(query.recorset)
        next()
    } catch (error) {
        res.status(500).json(
            {
                errorserver:error.message
            }
        )
    }      
});

app.get("/TablaContenido", (req, res)=>{
    res.render("TablaVista")
})

app.listen(process.env.portrunning, ()=>{
    console.log(`we are running application ${process.env.application_name}
    please inside to the localhost:8080/`);
});