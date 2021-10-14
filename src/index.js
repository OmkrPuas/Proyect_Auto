import * as app from './App.js';


const matriz_dimesiones = document.querySelector("#matrix_dimension");
const pos_inicial = document.querySelector("#origen");
const comandos = document.querySelector("#comandos");
const div_posIni = document.querySelector("#posInicial-div");
const div_comandos = document.querySelector("#ordenes-div");
const div_resultado = document.querySelector("#resultado-div");
const form = document.querySelector("#auto-form");

form.addEventListener("submit", (event) => {

  alert("Hey!");
  const matriz = matriz_dimesiones.value;
  alert(matriz);
  const origen = pos_inicial.value;
  alert(origen);
  const ordenes = comandos.value;
  alert(ordenes);
  const cadena = matriz+origen+ordenes;
  alert(cadena);
  

  div_posIni.innerHTML = "<p>" + origen + "</p>";
  div_comandos.innerHTML = "<p>" + ordenes + "</p>";
  div_resultado.innerHTML = "<p>" + app.RecepcionDeOrden(cadena) + "</p>";
});
