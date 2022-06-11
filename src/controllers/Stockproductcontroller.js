let ConectedDatabase = require('../database/ConexionSQL');
let {SimpleQuery, InventoryQuery, inventori2, Seconduery} = require('../database/Query');

async function getStock(req, res) {
    let poolresult = await ConectedDatabase();
    let query = await poolresult.request().query(InventoryQuery);
    console.log(query)
    res.json(query);       
}

module.exports = getStock;