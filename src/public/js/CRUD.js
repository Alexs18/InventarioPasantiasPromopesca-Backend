async function PeticionGet(API, Config) {

    try {
        console.log("Aqi estamos")
        let datapure = await fetch(API, Config);
        console.log("Peticion correcta")
        datapure.json().then((data)=>{
            data.forEach(element => {
                table.innerHTML+= `
                <tr>
                    <td> ${element.num_guia}</td>
                    <td> ${element.fecha_guia}</td>
                    <td> ${element.obs_guia}</td>
                    <td> ${element.observaciones}</td>
                    <td> ${element.numero}</td>
                    <td> ${element.cajas}</td>
                    <td> ${element.nombre_items}</td>
                    <td> ${element.codigo}</td>
                    <td> ${element.nombredoc}</td>
                    <td> ${element.nombre_especie}</td>
                    <td> ${element.fecha_produccion}</td>
                    <td> ${element.Nombre_Items_Tipos}</td>
                    <td> ${element.Obs_Calidad}</td>
                    <td> ${element.estado_calidad}</td>
                    <td> ${element.tipo_venta}</td>
                    <td> ${element.codigo_lata}</td>
                    <td> ${element.Unidades_Cajas}</td>
                    <td> ${element.Mes_Ingreso_Bodega}</td>
                    <td> ${element.Anio_Ingreso_Bodega}</td>
                    <td> ${element.Nombre_Items_Tipo_Envase}</td>
                    <td> ${element.unidades}</td>
                    <td> ${element.saldo}</td>
                    <td> ${element.CodigoErp}</td>
                    <td> ${element.Recibido}</td>
                    <td> ${element.Sticker}</td>
                    <td> ${element.Etiquetas}</td>
                    <td> ${element.Carton}</td>
                </tr>`
                Counter.innerHTML = `${data.length} registros actualmente`
            });
           
        })
    } catch (error) {
        console.log("we are a mistake")
    }
    
}
async function PeticionGetByNombre(API, Config, Valor) {

    try {
        let datapure = await fetch(API, Config);
        console.log("Peticion correcta3")
        datapure.json().then((data)=>{
            table.innerHTML = "";
            data.forEach(element => {
                nombreproducto.innerHTML = `${Valor}`
                table.innerHTML+= `
                <tr>
                    <td> ${element.num_guia}</td>
                    <td> ${element.fecha_guia}</td>
                    <td> ${element.obs_guia}</td>
                    <td> ${element.observaciones}</td>
                    <td> ${element.numero}</td>
                    <td> ${element.CodigoErp}</td>
                    <td> ${element.nombre_items}</td>
                    <td> ${element.codigo}</td>
                    <td> ${element.nombredoc}</td>
                    <td> ${element.nombre_especie}</td>
                    <td> ${element.fecha_produccion}</td>
                    <td> ${element.Nombre_Items_Tipos}</td>
                    <td> ${element.Obs_Calidad}</td>
                    <td> ${element.estado_calidad}</td>
                    <td> ${element.tipo_venta}</td>
                    <td> ${element.codigo_lata}</td>
                    <td> ${element.Unidades_Cajas}</td>
                    <td> ${element.Mes_Ingreso_Bodega}</td>
                    <td> ${element.Anio_Ingreso_Bodega}</td>
                    <td> ${element.Nombre_Items_Tipo_Envase}</td>
                    <td> ${element.unidades}</td>
                    <td> ${element.saldo}</td>
                    <td> ${element.cajas}</td>
                    <td> ${element.Recibido}</td>
                    <td> ${element.Sticker}</td>
                    <td> ${element.Etiquetas}</td>
                    <td> ${element.Carton}</td>
                </tr>`
                //Counter.innerHTML = `${data.length} registros actualmente`
            });
        
        })
    } catch (error) {
        console.log("we are a fkng mistake")
    }

}

/**Peticion para botones */
 // PeticionGet(APIURL, CONFIGAPI);

 let datospage = document.querySelectorAll("#btn-page");
 datospage.forEach((data, index, array)=>{
  data.addEventListener('click', ()=>{
      swal ( "Esta funcion aun no esta disponibleeeeee" ) ;
  })
 });

 //(async()=>{
       /* let Busqueda = document.getElementById("Buscar");
        Busqueda.addEventListener("click", async()=>{
            await PeticionGetByNombre(`http://192.168.1.12:8080/StokProductobyroduct/${paramsbusqueda.value}`, CONFIGAPI, paramsbusqueda.value);
            await GetValues(URI3, CONFIGAPI, paramsbusqueda.value);
        });*/
    //})()

    //GetValuesProducts(`http://192.168.1.12:8080/StokProductobyroduct`, CONFIGAPI, 'TROZOS DE ATÚN YF EN AGUA AF 307X109 170G 110.5G *48')

   // let PeticionTabla = fetch("http://192.168.1.12:8080/AllProducts", CONFIGAPI);

   //RegistroTabla()
    //setInterval(RegistroTabla(), 4000)
   /**  fetch("http://192.168.1.12:8080/AllProducts", CONFIGAPI).then(result=> result.json())
.then((data)=>{
    console.log('peticion 7 correcta')
    data.forEach(element=>{
    })
}).catch(error=> console.log(error))
    **/

  /* let Cajas = document.getElementById("Total_Cajas");
       let Unidades = document.getElementById("Total_Unidades");
       let Saldo = document.getElementById("Total_Saldo");*/
      
      /* async function GetValues(URI, CONFIG, PARAMS, Index) {
        let U = document.getElementById(`Unidades${Index}`);
        let S = document.getElementById(`Saldo${Index}`);
        let C = document.getElementById(`Cajas${Index}`);
        try {
            console.log("Peticion 4 correcta")
            let datapure = await fetch(`${URI}/${PARAMS}`, CONFIG);
            console.log("Peticion correcta4")
            datapure.json().then((data)=>{
                data.forEach((element, index) => {
                    C.innerHTML = `${index}`
                    S.innerHTML= `${element.SALDOCUENTA}`
                    U.innerHTML = `${element.UNIDADES}`
                });
            
            })
        } catch (error) {
            console.log("we are a fkng mistake3")
        }
       }*/

        //let check = document.getElementById("inlineCheckbox1");
    //check.addEventListener('click', RegistroTabla);