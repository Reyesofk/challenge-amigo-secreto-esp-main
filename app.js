// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//let nombreAmigo; 
let listadodeAmigos = [];
let amigoSorteado = [];
let nombresMaximos = 0;
//let inputAmigo;

function agregarAmigo(){
    // Obtenemos el nombre del amigo ingresado
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
   
    // Validamos que el valor no se vacio
    if (nombreAmigo === '' ){
        alert("Por favor, ingrese un Nombre");
       // return;
        
    } else {
        // se incluye nombre de amigo al array
       if (listadodeAmigos.includes(nombreAmigo)) {
            alert(`el nombre ${nombreAmigo} ya esta en la lista`);
            limpiarCaja();
            
        } else { 
           listadodeAmigos.push(nombreAmigo);
           // alert ("amigo ya existe");
           actualizarRegistroDeAmigos();
    
    }
    
}

}

function isEqual(nombreAmigo){
    return nombreAmigo.tolowerCase();
}

function actualizarRegistroDeAmigos (){
    // Crear elementos en la lista 
    let listado = document.getElementById("listaAmigos");
    listado.innerHTML = "";
    
    listadodeAmigos.forEach(nombreAmigo => {
        let serie = document.createElement("li");    
        serie.textContent = nombreAmigo;    
        listado.appendChild(serie);
    });
    limpiarCaja();
    
}

function existeNombre(nombreAmigo){
    for (let i=0; i < listadodeAmigos.length; i++ ){
        const element = listadodeAmigos[i];

        if (element.trim().tolowerCase() === nombreAmigo.trim().tolowerCase()) {
            //listadodeAmigos.push(nombreAmigo);
            //listadodeAmigos.includes(nombreAmigo);
            //actualizarRegistroDeAmigos();
            alert("Amigo ya Existe");
           
            } else{ 
                if (listadodeAmigos.includes(nombreAmigo)){
                    return listadodeAmigos();
     
                } else{
                    listadodeAmigos.push(nombreAmigo);
                    return nombreAmigo;
                }    

                //actualizarRegistroDeAmigos();

            }
           //return true;
        //return false; 

        } 
        //return;
    }


// limpiar input 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';

}

function  sortearAmigo(){

    if (listadodeAmigos.length === 0){
        alert("la lista esta vacia");
        return;
    
    }
    let amigoSecretoGenerado = Math.floor(Math.random() * listadodeAmigos.length);
    let amigoSorteado = listadodeAmigos[amigoSecretoGenerado];
    let resultadoAmigo = document.getElementById('resultado')
    resultadoAmigo.innerHTML = `<li>Tu amigo secreto es ${amigoSorteado}</li>`;




        nombresMaximos = listadodeAmigos.length;

   

}