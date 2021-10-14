function crear_array(tam_x) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = 0;
  }
  return mapa
}

function crear_Matrix(tam_x, tam_y) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = crear_array(tam_y);
  }
  return mapa
}

function ponerOrigen(mapa, origen) {
  var O_x = origen[0];
  var O_y = origen[1];
  var O_dir = origen[2];
  mapa[O_x][O_y] = O_dir
  return mapa
}

function validarComando(comando) {
  var res = false;
  if (comando == "A" || comando == "D" || comando == "I") {
    res = true;
  }
  return res
}

function validarComandos(comandos) {
  var res = true;
  for (var i = 0; i < comandos.length; i++) {
    if(validarComando(comandos[i]) == false){
      res = false;
    }
  }
  return res
}

function validarSentido(dimensiones, origen) {
  var res = false;
  if (dimensiones[0] > origen[0] && dimensiones[1] > origen[1]) {
    var sentido = origen[2];
    if (sentido == "N" || sentido == "E" || sentido == "O" || sentido == "S") {
      res = true;
    }
  }
  return res
}

function ubicarOrigen(MatrizyPO) {
  var dimensiones = MatrizyPO[0];
  var mapa = crear_Matrix(dimensiones[0], dimensiones[1])
  var origen = MatrizyPO[1];
  if (validarSentido(dimensiones, origen)) {
    mapa = ponerOrigen(mapa, origen);
  } else {
    mapa = false;
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
        if (isNaN(parseInt(segunda_parte[i]))) {
          segunda_parte[i] = segunda_parte[i];
        } else {
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

export { decifrarCadena, crear_Matrix, crear_array, ubicarOrigen, validarComando, validarComandos };
