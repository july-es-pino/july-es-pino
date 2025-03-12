

const listaDeAmigos = [];

//Input-id-'amigo'-"Escribe un nombre"
let amigosIngresados = document.getElementById('amigo');

//ul-id-'listaAmigos'
let listaAmigos = document.getElementById('listaAmigos');

//ul-id-'resultado'
let resultado = document.getElementById('resultado')



//Función que hace dinámico el 'onclick'
function agregarAmigo() {
    listaDeAmigos.push(amigosIngresados.value);

    if (amigosIngresados.value === '') {
        alert('Por favor ingresa un nombre')

    } else {
        crearLista()
       
        limpiarCaja()
    }

};

/* esta funcion, recorre el array para hacer una lista*/

function crearLista() {

    listaAmigos.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {

        listaAmigos.innerHTML += `<li>${listaDeAmigos[i]}</li>`

    }

};


// Funcion que limpia, cada que se ingresa un nuevo nombre
function limpiarCaja() {
    let caja = document.querySelector('#amigo');
    caja.value = '';


};

//Función que permite elegir aleatoriamente un elemento del array,para despues colocarlo en el resultado

function sortearAmigo() {

    if (!listaDeAmigos || listaDeAmigos.length === 0) {
        return undefined;
    } else {
        amigosIngresados = Math.floor(Math.random() * listaDeAmigos.length);

        resultado.innerHTML = (listaDeAmigos[amigosIngresados])

    }


};




