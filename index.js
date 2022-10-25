'use strict';
let bottonSubmit = document.getElementById("submit_disco");
let formulario = document.getElementById("formulario");
let nombreDeDisco = document.getElementById("nombre_disco");
let autorBanda = document.getElementById("autor_banda");
let codigo = document.getElementById("codigo");
let buttonNuevaPista = document.getElementById("ingresar_pista");
let pistasContainer = document.getElementById("pistas");

let pistasCount = 2;
/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];
formulario.onsubmit = (e) => {
    e.preventDefault();
  };

  buttonNuevaPista.addEventListener("click", function () {
    //creamos label
  
    let labelNombre = document.createElement("label");
    labelNombre.for = "nombre_de pista_" + pistasCount;
    labelNombre.textContent = "nombre de la pista";
  
    let labelDuracion = document.createElement("label");
    labelDuracion.for = "duracion_" + pistasCount;
    labelDuracion.textContent = "duracion";
  
    //creamos el input
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre_de pista_" + pistasCount;
    inputNombre.classList.add("pistas_nombre");
  
    let inputDuracion = document.createElement("input");
    inputDuracion.type = "number";
    inputDuracion.id = "duracion_" + pistasCount;
    inputDuracion.classList.add("pistas_duracion");
  
    pistasContainer.appendChild(labelNombre);
    pistasContainer.appendChild(inputNombre);
    pistasContainer.appendChild(labelDuracion);
    pistasContainer.appendChild(inputDuracion);
  
    pistasCount++;
  });
  bottonSubmit.addEventListener("click", function () {
    let pistasNombre = document.getElementsByClassName("pistas_nombre"); // HTMLcollection
    let pistasDuracion = document.getElementsByClassName("pistas_duracion"); // HTMLcollection
    pistasNombre = Array.from(pistasNombre); // arrays
    pistasDuracion = Array.from(pistasDuracion); // arrays
    
    // let pistas = []
    let nuevoDisco = {
      Nombre: nombreDeDisco.value,
      Autor: autorBanda.value,
      Codigo: codigo.value,
    };
    discos.push(nuevoDisco);
    console.log("discos:", discos);
  });


// Función Cargar:
const Cargar = () => {
    // Cositas:
    document.getElementById("formulario").style.display = "flex";
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
