let ConectedDatabase = require('../database/ConexionSQL');
let PDF = require('html-pdf')
let {STOK,PRUEBA, ALLPRODUCT, ByProductStock,GETCUENTAS, FILTERBYDISTINC, TIPEENVASE, LIQUIDOCOVERTURA
, LIQUIDOCOVERTURA2,
EXPORTACIONBUENO,
FORMATO,
LIQUIDOCIV} = require('../database/Query');
let {ServiceQueryStock, QueryFilter, QuerySelect} = require("../service/StokServices");

async function getStock(req, res, next) {
    let {numpage} = req.params;
    try {
        let result = await ServiceQueryStock(STOK, numpage);
        res.status(200).json(result).end();
    } catch (error) {
        res.status(500).json(
            {
                errorserver:error.message
            }
        )
    }      
}
async function GetByProduct(req, res) {
    let {nombreproducto, Opcional} = req.params;
    try {
    if (Opcional != undefined) {
        let NuevaCadena = `${nombreproducto}/${Opcional}`
        let Pool = await ConectedDatabase();
        let result = await Pool.request()
        .input("nombre_items", NuevaCadena)
        .query(ByProductStock);
    res.status(200).json(result.recordsets).end();
        debugger
    }else{
        let Pool = await ConectedDatabase();
        let result = await Pool.request()
        .input("nombre_items", nombreproducto)
        .query(ByProductStock);
        res.status(200).json(result.recordsets).end();
        debugger
    }
        
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                errorserver:error.message
            }
        )
    }
}

async function AllNameProduct(req, res) {
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(ALLPRODUCT);
        res.status(200).json(result.recordsets)      
    } catch (error) {
        
        res.status(200).json({
            serverError:error.message
        })
    }
}

async function GetValor(req, res) {
    let {NombreProducto, Opcional} = req.params;
    try {
        if (Opcional != undefined) {
            let NuevaCadena =`${NombreProducto}/${Opcional}`;
            let Pool = await ConectedDatabase();
            let result = await Pool.request()
            .input("nombre_items", NuevaCadena)
            .query(`${GETCUENTAS} WHERE [nombre_items] = @nombre_items`);
            res.status(200).json(result.recordset)
        }else{
            let Pool = await ConectedDatabase();
            let result = await Pool.request()
            .input("nombre_items", NombreProducto)
            .query(`${GETCUENTAS} WHERE [nombre_items] = @nombre_items`);
            res.status(200).json(result.recordset)
        }
        //debugger;
    } catch (error) {
        res.status(500).json(
            {
                ServerError:error.message
            }
        )
    }
}

async function GetGroup(req, res) {
    let {NombreGrupo} = req.params;
    try {
        let ResultQuery = await QueryFilter('Nombre_Items_Grupo', NombreGrupo, FILTERBYDISTINC);
        debugger;
        res.status(200).json(ResultQuery.recordsets)
    } catch (error) {
        res.status(500).json({
            errorserver:error.message
        })
    }
}

async function GetTipoEnvase(req, res) {
    let {NombreEnvase, Opcional} = req.params;
    debugger;
    try {
        if (Opcional != undefined) {
            let NuevaCadena =`${NombreEnvase}/${Opcional}`;
            let ResultQuery = await QueryFilter('Nombre_Items_Tipo_Envase', NuevaCadena, FILTERBYDISTINC);
            debugger;
            res.status(200).json(ResultQuery.recordsets)
        }else{
            //console.log('there')
            let ResultQuery = await QueryFilter('Nombre_Items_Tipo_Envase', NombreEnvase, FILTERBYDISTINC);
            debugger;
            res.status(200).json(ResultQuery.recordsets)
        }
    } catch (error) {
        res.status(500).json({
            errorserver:error.message
        })
    }
}

async function GetTipoEnvaseAtun(req, res) {
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(TIPEENVASE);
        res.status(200).json(result.recordsets)      
    } catch (error) {
        res.status(400).json({
            serverError:error.message
        })
    }
}

async function GetLiquidoCobertura(req, res) {
    let {NombreLiquido} = req.params;
    debugger
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request()
        .query(`${LIQUIDOCIV} and 
        (liqui.Nombre_Items_Liq_Cobertura) = '${NombreLiquido}'`);
        res.status(200).json(result.recordsets)
    } catch (error) {
        console.log(error);
        console.log(`${LIQUIDOCIV} and 
        (liqui.Nombre_Items_Liq_Cobertura) = ${NombreLiquido}`)
        res.status(400).json({
            serverError:error.message
        })
    }
}
async function GetEstadoExportacion(req, res) {
    let {filtro} = req.params
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(`${FILTERBYDISTINC} WHERE
        (unidades - ISNULL(unidades_despachadas, 0) > 0) AND nombre_marca LIKE '${filtro}%'`);
        res.status(200).json(result.recordsets)
    } catch (error) {
        res.status(400).json({
            serverError:error.message
        })
    }
}

/**Producto Exportación bueno */
async function GetEstadoExportacionBueno(req, res) {
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(EXPORTACIONBUENO);
        res.status(200).json(result.recordsets)
    } catch (error) {
        res.status(400).json({
            serverError:error.message
        })
    }
}

/**Formato */
async function GetFormato(req, res) {
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(FORMATO);
        res.status(200).json(result.recordsets)
    } catch (error) {
        res.status(400).json({
            serverError:error.message
        })
    }
}

/**Para llenar los selects */
async function GetSelect(req, res) {
    let {Filtro} = req.params;
    try {
        let result = await QuerySelect(Filtro);
        res.status(200).json(result.recordsets)
    } catch (error) {
        res.status(400).json({
            serverError:error.message
        })
    }
}

/**Endpoint de prueba */

async function Prueba(req, res) {
    try {
        let Pool = await ConectedDatabase();
        let result = await Pool.request().query(PRUEBA);
        res.status(200).json(result.recordsets)      
    } catch (error) {
        
        res.status(200).json({
            serverError:error.message
        })
    }
}

function TodasLasCuentas(Array1){
    let data = [];
    for (let index = 0; index < Array1.length; index++) {
      for (let index1 = 0; index1 < Array1[index].length; index1++) {
        
        data.push({
          SUMATORIACAJAS:Array1[index][index1].SUMATORIACAJAS,
          SALDOCUENTA:Array1[index][index1].SALDOCUENTA
        });
      }
      
    }
    return data
  }

  function Divisibles(valor) {
    if (valor % 3 === 0) {
        return valor
    }else{
        return
    }
}

function ChangeArray(cantidad) {
    
    let nuevacantidad = cantidad.toString();
    let nuevoarray = nuevacantidad.split('');
    let Contrario = nuevoarray.reverse();
    let cantidadcambiar = []

    for (let index = 0; index < Contrario.length; index++) {    
        let valor = Divisibles(index+1);
        if (valor != undefined) {
            cantidadcambiar.push(valor) 
        }
    }
    return {
        change:cantidadcambiar,
        value:Contrario
    }
    
}

function DataFinisth(cantidad) {
    let {change, value} = ChangeArray(cantidad);

    for (let index = 0; index < change.length; index++) {
  
        let posicion = change[index]
        value.splice(posicion+index, 0, ',');
        
      }
      if (value[value.length-1] === ',') {
        value.pop()
      }
      value.reverse();

      return value

}

 function CuentasTotales(Array1) {
    let cuentas = Array1.reduce((init, valor)=>{
      let total = init + valor.SALDOCUENTA;
      return total
    },0);
    let DatosRespuesta = DataFinisth(cuentas);
    let respuesta = DatosRespuesta.join('');
    return respuesta
  }
  function SaldoTotales(Array1) {
    // cuentas = 0
    let cuentas = Array1.reduce((init, valor)=>{
      let total = init + valor.SUMATORIACAJAS;
      return total
    },0);
    return cuentas
  }

function CrearFilas(Array) {
    
    let filastabla = ''
    for (let index = 0; index < Array.length; index++) {

            filastabla += `<tbody class="Table_Content">
                            <tr>
                                <td class="Table_body"> ${Array[index].CodigoErp}</td>
                                <td class="Table_body"> ${Array[index].nombre_items}</td>
                                <td class="Table_body"> ${Array[index].saldo}</td>
                                <td class="Table_body"> ${Array[index].cajas.toFixed(2)}</td>
                                <td class="Table_body"> ${Array[index].fecha_produccion}</td>
                                <td class="Table_body"> ${Array[index].Obs_Calidad}</td>
                                <td class="Table_body"> ${Array[index].estado_calidad}</td>
                                <td class="Table_body"> ${Array[index].tipo_defecto_pt}</td>
                                <td class="Table_body"> ${Array[index].codigo_lata}</td>
                                <td class="Table_body"> ${Array[index].Anio_Ingreso_Bodega}</td>
                                <td class="Table_body"> ${Array[index].Mes_Ingreso_Bodega}</td>
                                <td class="Table_body"> ${Array[index].Nombre_Items_Tipo_Envase}</td>
                                <td class="Table_body"> ${Array[index].Nombre_Items_Liq_Cobertura}</td>
                                <td class="Table_body"> ${Array[index].Recibido}</td>
                            </tr>
                        </tbody>`
        
    }
    return filastabla
}

function CreateDiv(Array) {
    let Div = ''
    for (let index = 0; index <  Array.length; index++) {
        Div += `<div class="Content_Div">
                    <p class="parrafo">
                        Inventario Detallado del producto:
                        <br>
                        <spam>${Array[index][0].nombre_items}</span>
                    </p>
                    
                    <p>Cajas: <span>${SaldoTotales(Array[index]).toFixed(2)}</span></p>
                    <p>Unidades: <span>${CuentasTotales(Array[index])}</span></p>
                    <br>
                    <table class="table table-hover">
                        <thead class="Table_Header">
                        <tr>
                            <th scope="col" class="Table_Title">CodigoErp</th>
                            <th scope="col" class="Table_Title">Producto</th>
                            <th scope="col" class="Table_Title">Sld_Unidades</th>
                            <th scope="col" class="Table_Title">Sld_Cajas</th>
                            <th scope="col" class="Table_Title">Fech_Produccion</th>
                            <th scope="col" class="Table_Title">Obs_Calidad</th>
                            <th scope="col" class="Table_Title">Est_Calidad</th>
                            <th scope="col" class="Table_Title">Tip_Defecto</th>
                            <th scope="col" class="Table_Title">Cod_Lata</th>
                            <th scope="col" class="Table_Title">Año_IngrBodega</th>
                            <th scope="col" class="Table_Title">Mes_IngrBodega</th>
                            <th scope="col" class="Table_Title">Formato</th>
                            <th scope="col" class="Table_Title">Liq_Cobertura</th>
                            <th scope="col" class="Table_Title">Recibido</th>
                        </tr>
                        </thead>
                        <tbody>
                            ${CrearFilas(Array[index])}
                        </tbody>
                    </table>
                </div>`
                
            }  
            return Div
}

async function MakePdf(req, res) {
    let fechareporte = new Date();
    let fechaImpresion = `${fechareporte.getDay()}/${fechareporte.getMonth()}/${fechareporte.getFullYear()}`
    let HoraImpresion = `${fechareporte.getHours()}: ${fechareporte.getMinutes()}: ${fechareporte.getSeconds()}`
    /**Opciones para formar el pdf */
    let options = {
        "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
        "orientation": "landscape", // portrait or landscape
    }
    let bodyhtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        .Content_Div{
            margin-bottom: 50px;
        }
        .parrafo{
            width: 100%; padding: 5px;
            text-align: center;
        }
        .table{
            margin:10px;
        }
        .Table_Header{
            background-color: aliceblue;
            border: 0.5px solid black;
            color: black;
            padding: 5px;
            font-size: 12px;
        }
        .Table_Content{
            width: auto;
            height: auto;
        }
        .Table_Title{
            width: 30px;
            padding:5px
        }
        .Table_body{
            text-align: center;
            font-size: 10px;
        }
        header{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid black;
            font-size: 15px;
            width: 100%;
            margin-top: -15px;
        }
        footer{
            display: flex;
            flex-direction: column;
            font-size: 15px;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        </style>
    </head>
    <body>
        <header id="pageHeader">
            <p>Fecha de Reporte: <span>${fechaImpresion}</span></p>
            <div>
                <p>Total de Cajas: <span>${SaldoTotales(TodasLasCuentas(req.body)).toFixed(2)}</span></p>
                <p>Total de Unidades: <span>${CuentasTotales(TodasLasCuentas(req.body))}</span></p>
            </div>
        </header>
        <footer id="pageFooter">
            <p>Hora Del Reporte: <span>${HoraImpresion}</span><p>
        </footer>
        ${CreateDiv(req.body)}
    </body>
    </html>`
                PDF.create(bodyhtml, options).toFile('./Reportes.pdf', (err, resp)=>{
                    if (err){
                        return console.log(err)
                    }else{
                        console.log(resp);
                        res.status(200).json({status:200, icon:"success", ruta: resp.filename , title:'Pdf Generado exitosamente'})
                    }
                    
                })

}


module.exports = {
    getStock:getStock,
    GetByProduct:GetByProduct,
    AllNameProduct:AllNameProduct,
    GetValor:GetValor,
    GetGroup:GetGroup,
    GetTipoEnvase:GetTipoEnvase,
    GetTipoEnvaseAtun:GetTipoEnvaseAtun,
    GetLiquidoCobertura:GetLiquidoCobertura,
    GetEstadoExportacion:GetEstadoExportacion,
    MakePdf:MakePdf,
    Prueba:Prueba,
    GetEstadoExportacionBueno:GetEstadoExportacionBueno,
    GetFormato:GetFormato,
    GetSelect:GetSelect

};