// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo; 
let listadodeAmigos = [];

function agregarAmigo(){
    // Obtenemos el nombre del amigo ingresado
    let nombreAmigo = document.getElementById('amigo').value;
    
    // Validamos que el valor no se vacio
    if (nombreAmigo === '' ){
        alert("Por favor, ingrese un Nombre");
       // return;
        
    } else {
        listadodeAmigos.push(nombreAmigo);
        actualizarRegistroDeAmigos(nombreAmigo);
        return nombreAmigo;

    }
    //console.log(listadodeAmigos);
    //alert("Tocaste el Boton");
    //return;

    
    

}


// agregar elementos a la lista
//document.getElementById("listaAmigos").appendChild(amigo);

// lipiar cuadro de texto 
//document.getElementById("amigo").value = "";
function actualizarRegistroDeAmigos (){
    // Crear elementos en la lista 
    let listado = document.getElementById("listaAmigos");
    listado.innerHTML = "";
    
    listadodeAmigos.forEach(nombreAmigo => {
        let serie = document.createElement("li");
        serie.textContent = nombreAmigo;    
        listado.appendChild(serie);
    });
    
    //listaAmigos = document.getElementById("listaAmigos");
   

    //let listado = document.getElementById("listaAmigos");
    //listado.innerHTML = nombre;
    //listado.textContent = nombreAmigo;
    //.appendChild(nombreAmigo);
    //Document.getElementById("listaAmigos").appendChild(nombreAmigo);

}


 /*function actualizarListado (persona){
    let listado = document.querySelector('#listaAmigos');
    listado.innerHTML += `<li>${persona}</li>`;



}*/