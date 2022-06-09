let ConectedDatabase = require('../database/ConexionSQL');

async function getStock(req, res) {
    let poolresult = await ConectedDatabase();
    let query = await poolresult.request().query("SELECT * from dbo.[PT.Temp.InventarioStock]");
    res.json(query);       
}

module.exports = getStock;