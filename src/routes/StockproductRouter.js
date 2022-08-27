let {StockProductoControler} = require('../controllers/index');
let {Router} = require('express');

function StockRouter() {
    let Route = Router();
    Route.get('/StockProducto/:numpage', StockProductoControler.getStock);
    Route.get('/StokProductobyroduct/:nombreproducto/:Opcional?', StockProductoControler.GetByProduct);
    Route.get('/AllProducts', StockProductoControler.AllNameProduct);
    Route.get('/GetCuentas/:NombreProducto/:Opcional?', StockProductoControler.GetValor);
    Route.get('/GetGrupos/:NombreGrupo', StockProductoControler.GetGroup);
    Route.get('/GetTipoEnvase/:NombreEnvase/:Opcional?', StockProductoControler.GetTipoEnvase);
    Route.get('/GetProductAtun', StockProductoControler.GetTipoEnvaseAtun);
    Route.get('/LiquidoCobertura/:NombreLiquido', StockProductoControler.GetLiquidoCobertura);
    Route.get('/EstadoExportacion/:filtro', StockProductoControler.GetEstadoExportacion);
    Route.post('/MakePDF', StockProductoControler.MakePdf);
    Route.get('/Prueba', StockProductoControler.Prueba);
    Route.get('/EstadoExportacionBueno', StockProductoControler.GetEstadoExportacionBueno);
    Route.get('/Select/:Filtro', StockProductoControler.GetSelect);
    Route.get('/Formato', StockProductoControler.GetFormato);
    Route.get('*', (req, res)=>{
        res.status(400).json({message:'esta ruta no existe'})
    })
    return Route;
}

module.exports = {
    StockRouter:StockRouter
}

