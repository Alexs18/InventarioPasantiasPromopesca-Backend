let StockControler = require('../controllers/Stockproductcontroller');
let {Router} = require('express');

function StockRouter() {
    let Route = Router();
    Route.use('/StockProducto', StockControler);
    return Route;
}

module.exports = {
    StockRouter:StockRouter
}

