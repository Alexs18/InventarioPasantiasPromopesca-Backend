let ConectedDatabase = require('../database/ConexionSQL');
let {SimpleQuery, InventoryQuery, inventori2, Seconduery} = require('../database/Query');

async function getStock(req, res, next) {
    try {
        let poolresult = await ConectedDatabase();
        let query = await poolresult.request().query(InventoryQuery);
        console.log("that petition was sucess");
        debugger;
        res.status(200).json(query.recordset).end()
    } catch (error) {
        res.status(500).json(
            {
                errorserver:error.message
            }
        )
    }      
}

module.exports = getStock;