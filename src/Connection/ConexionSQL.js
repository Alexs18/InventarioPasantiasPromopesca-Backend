const conexionsql = require('mssql');
const config = require('../config/index.js');

///console.log(conexionsql.connect())

async function ConecctionDatabase() {
    const result = await conexionsql.connect(config);
    console.log("Database connection was success")
    let dataquery = await result.request().query("SELECT * from dbo.[PT.Temp.InventarioStock]");
    return dataquery.recordset;
}

ConecctionDatabase()
module.exports = ConecctionDatabase;