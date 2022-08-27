let reduce = [1,2,3]
let tamanio =reduce.reduce((valor, valornuevo)=>{
    return valor + valornuevo
},0);
console.log(tamanio)
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => {return previousValue + currentValue},
  initialValue
);

console.log(sumWithInitial);
console.log('change');

let newarreglo = [{valor:1, data:1}, {valor:2, data:3}]
let cuentanueva = newarreglo.reduce((init, nextvalue)=>{
    return {
      valor: init + nextvalue.valor,
      data: init + nextvalue.data
    }
},0);
console.log(cuentanueva.valor);

console.log('Prueba de cuentas');

let CuentasApi = [
  [
    { "SUMATORIACAJAS": 0, "SALDOCUENTA": 7, "num_guia": 922, "fecha_guia": "2021-09-27T09:35:44.310Z", "obs_guia": "INGRESO ALMACEN", "observaciones": "", "unidades_despachadas": 0, "nombre": "QC", "numero": 1, "cajas": 0, "nombre_items": "TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48", "codigo": "S1", "nombredoc": "INGRESO DE ENLATADO A BODEGA", "nombre_especie": "YELLOWFIN", "fecha_produccion": "2021-09-23T00:00:00.000Z", "Nombre_Items_Tipos": "TROZOS", "Obs_Calidad": null, "estado_calidad": "LIBERADO", "tipo_venta": "EXPORTACION", "codigo_lata": "L:B 23I21", "Unidades_Cajas": 48, "Mes_Ingreso_Bodega": 9, "Anio_Ingreso_Bodega": 2021, "Nombre_Items_Tipo_Envase": "307 X109 AF", "unidades": 7, "saldo": 7, "CodigoErp": "261210001", "Costo": 0, "Recibido": true, "Sticker": false, "Carton": false, "Etiquetas": false }, 
    { "SUMATORIACAJAS": 11, "SALDOCUENTA": 566, "num_guia": 922, "fecha_guia": "2021-09-27T09:35:44.310Z", "obs_guia": "INGRESO ALMACEN", "observaciones": "", "unidades_despachadas": 3, "nombre": "PALET", "numero": 31832, "cajas": 11, "nombre_items": "TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48", "codigo": "S1", "nombredoc": "INGRESO DE ENLATADO A BODEGA", "nombre_especie": "YELLOWFIN", "fecha_produccion": "2021-09-23T00:00:00.000Z", "Nombre_Items_Tipos": "TROZOS", "Obs_Calidad": null, "estado_calidad": "LIBERADO", "tipo_venta": "EXPORTACION", "codigo_lata": "L:B 23I21", "Unidades_Cajas": 48, "Mes_Ingreso_Bodega": 9, "Anio_Ingreso_Bodega": 2021, "Nombre_Items_Tipo_Envase": "307 X109 AF", "unidades": 569, "saldo": 566, "CodigoErp": "261210001", "Costo": 0, "Recibido": true, "Sticker": true, "Carton": true, "Etiquetas": true } 
  ],
  [
    { "SUMATORIACAJAS": 20, "SALDOCUENTA": 10, "num_guia": 922, "fecha_guia": "2021-09-27T09:35:44.310Z", "obs_guia": "INGRESO ALMACEN", "observaciones": "", "unidades_despachadas": 0, "nombre": "QC", "numero": 1, "cajas": 0, "nombre_items": "TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48", "codigo": "S1", "nombredoc": "INGRESO DE ENLATADO A BODEGA", "nombre_especie": "YELLOWFIN", "fecha_produccion": "2021-09-23T00:00:00.000Z", "Nombre_Items_Tipos": "TROZOS", "Obs_Calidad": null, "estado_calidad": "LIBERADO", "tipo_venta": "EXPORTACION", "codigo_lata": "L:B 23I21", "Unidades_Cajas": 48, "Mes_Ingreso_Bodega": 9, "Anio_Ingreso_Bodega": 2021, "Nombre_Items_Tipo_Envase": "307 X109 AF", "unidades": 7, "saldo": 7, "CodigoErp": "261210001", "Costo": 0, "Recibido": true, "Sticker": false, "Carton": false, "Etiquetas": false }, 
    { "SUMATORIACAJAS": 20, "SALDOCUENTA": 500, "num_guia": 922, "fecha_guia": "2021-09-27T09:35:44.310Z", "obs_guia": "INGRESO ALMACEN", "observaciones": "", "unidades_despachadas": 3, "nombre": "PALET", "numero": 31832, "cajas": 11, "nombre_items": "TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48", "codigo": "S1", "nombredoc": "INGRESO DE ENLATADO A BODEGA", "nombre_especie": "YELLOWFIN", "fecha_produccion": "2021-09-23T00:00:00.000Z", "Nombre_Items_Tipos": "TROZOS", "Obs_Calidad": null, "estado_calidad": "LIBERADO", "tipo_venta": "EXPORTACION", "codigo_lata": "L:B 23I21", "Unidades_Cajas": 48, "Mes_Ingreso_Bodega": 9, "Anio_Ingreso_Bodega": 2021, "Nombre_Items_Tipo_Envase": "307 X109 AF", "unidades": 569, "saldo": 566, "CodigoErp": "261210001", "Costo": 0, "Recibido": true, "Sticker": true, "Carton": true, "Etiquetas": true } 
    ,    { "SUMATORIACAJAS": 20, "SALDOCUENTA": 500, "num_guia": 922, "fecha_guia": "2021-09-27T09:35:44.310Z", "obs_guia": "INGRESO ALMACEN", "observaciones": "", "unidades_despachadas": 3, "nombre": "PALET", "numero": 31832, "cajas": 11, "nombre_items": "TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48", "codigo": "S1", "nombredoc": "INGRESO DE ENLATADO A BODEGA", "nombre_especie": "YELLOWFIN", "fecha_produccion": "2021-09-23T00:00:00.000Z", "Nombre_Items_Tipos": "TROZOS", "Obs_Calidad": null, "estado_calidad": "LIBERADO", "tipo_venta": "EXPORTACION", "codigo_lata": "L:B 23I21", "Unidades_Cajas": 48, "Mes_Ingreso_Bodega": 9, "Anio_Ingreso_Bodega": 2021, "Nombre_Items_Tipo_Envase": "307 X109 AF", "unidades": 569, "saldo": 566, "CodigoErp": "261210001", "Costo": 0, "Recibido": true, "Sticker": true, "Carton": true, "Etiquetas": true } 

  ]
]

function TablatoPdf(Array) {
    for (let index = 0; index < Array.length; index++) {
      
      Array[index].forEach(element => {
        console.log(element.SUMATORIACAJAS)
      });
      
    }
}

function TodasLasCuentas(Array) {
  let data = [];
  for (let index = 0; index < Array.length; index++) {
    for (let index1 = 0; index1 < Array[index].length; index1++) {
      
      console.log(Array[index][index1].SUMATORIACAJAS);
      data.push({
        SUMATORIACAJAS:Array[index][index1].SUMATORIACAJAS,
        SALDOCUENTA:Array[index][index1].SALDOCUENTA
      });
    }
    
  }
  return data
}

let datos = TodasLasCuentas(CuentasApi);
console.log('las cajas');
console.log(datos)

function CuentasTotales(Array) {
  let cuentas = Array.reduce((init, valor)=>{
    let total = init + valor.SALDOCUENTA;
    return total
  },0);
  return cuentas
}

console.log('aqui estan las cuentas')
console.log(CuentasTotales(datos));

let dos = 2, tres= 3

if (dos != 2 || 3 != 3  || 1==1) {
  console.log('cierto')
}else{
  console.log('false')
}

if (dos != 2 && 3 != 3  && 1==1) {
  console.log('cierto X2')
}else{
  console.log('false x2')
}


console.log('tabla para pdf')

TablatoPdf(CuentasApi)