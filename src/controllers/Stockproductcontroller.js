let ConectedDatabase = require('../database/ConexionSQL');
let {SimpleQuery, InventoryStock} = require('../database/Query');

async function getStock(req, res) {
    let poolresult = await ConectedDatabase();
    let query = await poolresult.request().query(SimpleQuery);
    console.log(query.recordset);
    res.json(query);       
}

module.exports = getStock;