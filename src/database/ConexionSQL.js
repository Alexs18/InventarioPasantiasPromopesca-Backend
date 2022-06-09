const conexionsql = require('mssql');
const config = require('../config/index.js');

///console.log(conexionsql.connect())

async function ConecctionDatabase() {
    const result = await conexionsql.connect(config);
    console.log("Database connection was success")
    return result;
}

module.exports = ConecctionDatabase;