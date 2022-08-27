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



let numeros = 123456
console.log(DataFinisth(numeros));
// let datos1 = DataFinisth(numeros);
// let datosnew = datos1.join('');
// console.log('new')
// console.log(datosnew);
