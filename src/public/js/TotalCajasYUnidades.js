let CONFIGAPI3 = {
    method:'Get',
    headers:{
        "Access-Control-Allow-Origin":"*"
     }
}
let paramsbusqueda = document.getElementById("SelectProducts");
fetch("http://localhost:8080/GetCuentas", CONFIGAPI)
.then(resolve=> resolve.json())
.then(data=> console.log(data))