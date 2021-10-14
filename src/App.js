function crear_Matrix(tam_x, tam_y) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = new Array(tam_y);
    for (var j = 0; j < tam_y; j++) {
      mapa[i][j] = 0;
    }
  }
  return mapa
}

function crear_array(tam_x) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = 0;
  }
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

  if (mensaje.length > 2) {
    var tercera_parte = mensaje[2].split("");
    mensaje[2] = tercera_parte;
  }
  return mensaje
}

export { decifrarCadena, crear_Matrix ,crear_array};
