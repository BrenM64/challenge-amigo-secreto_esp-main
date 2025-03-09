// Arrays
const inputListaAmigos= document.getElementById('amigo');
// listaAmigos permite capturar los datos y guardarlos
const listaAmigos =[];
// ingresoListaAmigo permitirá obtenerlos visualmente en la página
const ingresoListaAmigo = document.getElementById('listaAmigos');
// ingresoResultado permitirá obtenerlos visualmente en la página
const ingresoResultado = document.getElementById('resultado');
// COMIENZAN LAS FUNCIONES
function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo')
    valorCaja.value='';
 }
// Función donde el usuario agrega los nombres de los amigos 
function agregarAmigo (){
 if (inputListaAmigos.value=="")
    alert('Por favor, inserte un nombre.')
 else 
    listaAmigos.push(inputListaAmigos.value);
    ingresoListaAmigo.innerHTML+= `<li>${inputListaAmigos.value}</li>`;
    limpiarCaja();
}   

function sortearAmigo (){
    for (let i = 0; i < listaAmigos.length; i++) {
        console.log(listaAmigos[i])
    }
    const numeroASortear = (Math.floor(Math.random()*listaAmigos.length))
const amigoResultado =listaAmigos[numeroASortear]
ingresoResultado.innerHTML = `<li>El amigo secreto es ${amigoResultado}<li>`
}
