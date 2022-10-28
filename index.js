"use strict";
let bottonSubmit = document.getElementById("submit_disco");
let formulario = document.getElementById("formulario");
let nombreDeDisco = document.getElementById("nombre_disco");
let autorBanda = document.getElementById("autor_banda");
let codigo = document.getElementById("codigo");
let buttonNuevaPista = document.getElementById("ingresar_pista");
let pistasContainer = document.getElementById("pistas");
let pistaNombre1 = document.getElementById("nombre_de_pista_1");
let pistaDuracion1 = document.getElementById("duracion_1");

let botonMostrar = document.getElementById("mostrar");
botonMostrar.addEventListener("click", function () {
  console.log("mostrar");
  let html = "";
  discos.forEach(function (disco) {
    html += `<div>${disco.Nombre}</div>`;
  });

  // Cositas:
  // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
  document.getElementById("info").innerHTML = html; // <--- ahí es acá
});

pistaNombre1.addEventListener("input", function (event) {
  event.target.style.border = "solid black 1px";
  document.getElementById("error_pista_nombre_1").style.display = "none";
});
pistaDuracion1.addEventListener("input", function (event) {
  event.target.style.border = "solid black 1px";
  document.getElementById("error_pista_duracion_1").style.display = "none";
});

nombreDeDisco.addEventListener("input", function (event) {
  event.target.style.border = "solid black 1px";
  document.getElementById("error_pista_duracion_1").style.display = "none";
});

autorBanda.addEventListener("input", function (event) {
  event.target.style.border = "solid black 1px";
  document.getElementById("error_message_autor").style.display = "none";
});

codigo.addEventListener("input", function (event) {
  event.target.style.border = "solid black 1px";
  document.getElementById("error_message_codigo").style.display = "none";
});

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
//onsubmit es un una funcion que se jecuta cuando el usaurio submitea la informacion
// Discos:
let discos = [];
let codigos = [];
formulario.onsubmit = (e) => {
  e.preventDefault();
};
function ingresarPistas() {
  //validaciones
  const validationName = document.createElement("div");
  validationName.textContent = "ingrese un nombre de pista";
  validationName.classList.add("validation");
  validationName.id = "error_pista_nombre_" + pistasCount;

  const validationDuration = document.createElement("div");
  validationDuration.textContent = "ingrese una duracion de pista";
  validationDuration.classList.add("validation");
  validationDuration.id = "error_pista_duracion_" + pistasCount;

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

  inputNombre.addEventListener("input", function (event) {
    inputNombre.style.border = "solid 1px black";
    validationName.style.display = "none";
  });

  console.log("input nombre", inputNombre);

  let inputDuracion = document.createElement("input");
  inputDuracion.type = "number";
  inputDuracion.id = "duracion_" + pistasCount;
  inputDuracion.classList.add("pistas_duracion");

  inputDuracion.addEventListener("input", function (event) {
    inputDuracion.style.border = "solid 1px black";
    validationDuration.style.display = "none";
  });

  pistasContainer.appendChild(labelNombre);
  pistasContainer.appendChild(inputNombre);
  pistasContainer.appendChild(validationName);
  pistasContainer.appendChild(labelDuracion);
  pistasContainer.appendChild(inputDuracion);
  pistasContainer.appendChild(validationDuration);
  pistasCount++;

  console.log("discos:", discos);
}

buttonNuevaPista.addEventListener("click", ingresarPistas);
bottonSubmit.addEventListener("click", function () {
  let pistasNombre = document.getElementsByClassName("pistas_nombre"); // HTMLcollection
  let pistasDuracion = document.getElementsByClassName("pistas_duracion"); // HTMLcollection
  pistasNombre = Array.from(pistasNombre); // arreglo
  pistasDuracion = Array.from(pistasDuracion); // arreglo
  let checkpistas = true;

  pistasNombre.map(function (el, i) {
    if (el.value === "") {
      el.style.border = "solid 1px red";
      document.getElementById("error_pista_nombre_" + (i + 1)).style.display =
        "block";
      checkpistas = false;
    }
  });
  pistasDuracion.map(function (el, i) {
    if (el.value === "") {
      el.style.border = "solid 1px red";
      document.getElementById("error_pista_duracion_" + (i + 1)).style.display =
        "block";
      checkpistas = false;
    }
  });
  if (
    nombreDeDisco.value !== "" &&
    autorBanda.value !== "" &&
    codigo.value !== "" &&
    Number(codigo.value) > 0 &&
    Number(codigo.value) < 999 &&
    checkpistas
  ) {
    let pistas = [];
    if (codigos.includes(codigo.value)) {
      alert("el codigo ya existe");
    } else {
      for (let i = 0; i < pistasNombre.length; i++) {
        pistas.push({
          Nombre: pistasNombre[i].value,
          Duracion: pistasDuracion[i].value,
        });
      }

      const otraPista = confirm("¿quieres ingresar otra pista?");
      if (otraPista) {
        ingresarPistas();
      } else {
        let nuevoDisco = {
          Nombre: nombreDeDisco.value,
          Autor: autorBanda.value,
          Codigo: codigo.value,
          Pistas: pistas,
        };
        discos.push(nuevoDisco);
        codigos.push(codigo.value);
        console.log("discos", discos);
      }
      /*
   let nuevoDisco = {
     Nombre: nombreDeDisco.value,
     Autor: autorBanda.value,
     Codigo: codigo.value,
     Pistas: pistas,
   };
   discos.push(nuevoDisco);
   codigos.push(codigo.value);
   console.log("discos", discos);
   */
    }
  } else {
    validationInput();
  }
});

function validationInput() {
  let pistasNombre = document.getElementsByClassName("pistas_nombre"); // HTMLcollection
  let pistasDuracion = document.getElementsByClassName("pistas_duracion"); // HTMLcollection
  pistasNombre = Array.from(pistasNombre); // arreglo
  pistasDuracion = Array.from(pistasDuracion); // arreglo

  if (nombreDeDisco.value === "") {
    nombreDeDisco.style.border = "solid 1px red";
    document.getElementById("error_message_nombre").style.display = "block";
  }
  if (autorBanda.value === "") {
    autorBanda.style.border = "solid 1px red";
    document.getElementById("error_message_autor").style.display = "block";
  }
  console.log("codigo", Number(codigo.value));
  if (
    codigo.value === "" ||
    Number(codigo.value) < 0 ||
    Number(codigo.value) > 999
  ) {
    codigo.style.border = "solid 1px red";
    document.getElementById("error_message_codigo").style.display = "block";
  }
}

// Función Cargar:
const Cargar = () => {
  //DOM
  document.getElementById("formulario").style.display = "flex";
  // Cositas:
};

// Función Mostrar:
const Mostrar = () => {
  console.log("ejecutando mostrar");
  // Variable para ir armando la cadena:
  //acceder al arreglo y crear elementos html
  // usar innerHTML
};

// Todas las funciones que necesites:
/*
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
*/
