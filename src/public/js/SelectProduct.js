/**let selectproduct = document.getElementById("SelectProducts");
let CONFIGAPI2 = {
    method:'Get',
    headers:{
        "Access-Control-Allow-Origin":"*"
     }
}
fetch("http://192.168.1.12:8080/AllProducts", CONFIGAPI2).then(result=> result.json())
.then((data)=>{
    console.log('peticion 2 correcta')
    data.forEach(element=>{
        selectproduct.innerHTML+= `<option selected>${element.nombre_items}</option>`
    })
}).catch(error=> console.log(error))*/