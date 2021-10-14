function crear_Matrix(tam_x) {

  var mapa = new Array(tam_x);
  return mapa
}

function decifrarCadena(cadena) {
  var mensaje = cadena.split("/");
  if (mensaje[0].length > 1) {
    var numeros_primera_parte = mensaje[0].split(",");
    for (var i = 0; i < numeros_primera_parte.length; i++) {
      numeros_primera_parte[i] = parseInt(numeros_primera_parte[i]);
    }
    mensaje[0] = numeros_primera_parte;
  } else {
    mensaje[0] = parseInt(mensaje[0]);
  }

  if (mensaje.length > 1) {
    if (mensaje[1].length > 1) {
      var segunda_parte = mensaje[1].split("");
      for (var i = 0; i < segunda_parte.length; i++) {
        if (isNaN(parseInt(segunda_parte[i]))){
          segunda_parte[i] = segunda_parte[i];
        }else{
          segunda_parte[i] = parseInt(segunda_parte[i]);
        }
      }
      mensaje[1] = segunda_parte;
    }
  }
  return mensaje
}

export { decifrarCadena, crear_Matrix };
