let ConectedDatabase = require('../database/ConexionSQL');

async function DataResultSwicth(data, datareal, numpage) {
    switch (numpage) {
        case '1':
            console.log("we are in the case one");
            for (let i = 0; i<=195; i++ ) {
                await datareal.push(data[i]);
           }
            return datareal;
            break;
        case '2':
            console.log("we are in the case two");
            for (let i = 196; i<=390; i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        case '3':
            console.log('we are in the case three')
            for (let i = 195*2; i<=(195*3); i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        case '4':
            for (let i = 195*3; i<=(195*4); i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        case '5':
            for (let i = 195*4; i<=(195*5); i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        case '6':
            for (let i = (195*5); i<=(195*6); i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        case '7':
            for (let i = 195*6; i<=(195*7); i++ ) {
                await datareal.push(data[i]);
           }
           return datareal;
            break;
        default:
            break;
    }
}

async function ResultQuery(data, datareal, numpage) {
    console.log(data.length/20)
    for (let i = 0; i<=numpage; i++ ) {
         await datareal.push(data[i]);
    }
    return datareal;
}

async function QueryStock(query, numpage) {
    try {
        let poolresult = await ConectedDatabase();
        let resultdata = [];
        let queryresult = await poolresult.request().query(query);
        let quinientos = await ResultQuery(queryresult.recordset, resultdata, numpage);
        return quinientos;
    } catch (error) {
        return error
    }

}

async function QueryFilter(CampoBusqueda, CampoBuscar, Query) {
    debugger
    try {
        let poolresult = await ConectedDatabase();
        let FilterResult = await poolresult.request()
        .input(CampoBusqueda, CampoBuscar)
        .query(`${Query} WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0) and ${CampoBusqueda} = @${CampoBusqueda}`);
        return FilterResult;
    } catch (error) {
        return error
    }
}

async function QuerySelect(CampoBusqueda) {
    try {
        let poolresult = await ConectedDatabase();
        let FilterResult = await poolresult.request()
        .query(`SELECT DISTINCT(${CampoBusqueda})
            FROM  dbo.ProTerm_Ingresos_C1 as pro
                join dbo.[PT.Items_Liq_Cobertura] as liqui
            on pro.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura
                WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0)`);
        return FilterResult;
    } catch (error) {
        return error
    }
}


module.exports = {
    ServiceQueryStock:QueryStock,
    QueryFilter:QueryFilter,
    QuerySelect:QuerySelect
}