function crear_Matrix(tam_x){

  var mapa = new Array(tam_x);
  return mapa
}

function decifrarCadena(cadena){
  var numeros = cadena.split(",")
  for (var i=0; i < numeros.length; i++) {
    numeros[i] = parseInt(numeros[i]);
 }
  return numeros
}

export {decifrarCadena, crear_Matrix};
