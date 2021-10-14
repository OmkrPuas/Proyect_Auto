export function crear_array(tam_x) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = 0;
  }
  return mapa
}

export function crear_Matrix(tam_x, tam_y) {
  var mapa = new Array(tam_x);
  for (var i = 0; i < tam_x; i++) {
    mapa[i] = crear_array(tam_y);
  }
  return mapa
}

export function ponerOrigen(mapa, origen) {
  var O_x = origen[0];
  var O_y = origen[1];
  var O_dir = origen[2];
  mapa[O_x][O_y] = O_dir
  return mapa
}

export function validarComando(comando) {
  var res = false;
  if (comando == "A" || comando == "D" || comando == "I" || comando == "S") {
    res = true;
  }
  return res
}

export function validarComandos(comandos) {
  var res = true;
  for (var i = 0; i < comandos.length; i++) {
    if(validarComando(comandos[i]) == false){
      res = false;
    }
  }
  return res
}

export function validarSentido(dimensiones, origen) {
  var res = false;
  if (dimensiones[0] > origen[0] && dimensiones[1] > origen[1]) {
    var sentido = origen[2];
    if (sentido == "N" || sentido == "E" || sentido == "O" || sentido == "S") {
      res = true;
    }
  }
  return res
}

export function verificarValidez(Matriz_Origen_Ordenes) {
  var res = false;
  if (validarSentido(Matriz_Origen_Ordenes[0],Matriz_Origen_Ordenes[1]) == true){
    res = validarComandos(Matriz_Origen_Ordenes[2]);
  }
  return res
}

export function cambiarDireccion(mapa, posicion, orden) {
  if(orden == "I"){
    if(posicion[2] == "N"){
      mapa[posicion[0]][posicion[1]] = "O";
    }
    if(posicion[2] == "S"){
      mapa[posicion[0]][posicion[1]] = "E";
    }
    if(posicion[2] == "E"){
      mapa[posicion[0]][posicion[1]] = "N";
    }
    if(posicion[2] == "O"){
      mapa[posicion[0]][posicion[1]] = "S";
    }
  }else{
    if(posicion[2] == "N"){
      mapa[posicion[0]][posicion[1]] = "E";
    }
    if(posicion[2] == "S"){
      mapa[posicion[0]][posicion[1]] = "O";
    }
    if(posicion[2] == "E"){
      mapa[posicion[0]][posicion[1]] = "S";
    }
    if(posicion[2] == "O"){
      mapa[posicion[0]][posicion[1]] = "N";
    }
  }
  return mapa
}

export function comando_saltar(mapa, posicion){
  if(posicion[2] == "N"){
    if(posicion[0] > 1){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]-2][posicion[1]] = "N"
    }
  }
  if(posicion[2] == "S"){
    if(posicion[0] < mapa.length-2){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]+2][posicion[1]] = "S"
    }
  }
  if(posicion[2] == "E"){
    if(posicion[1] < mapa[posicion[0]].length - 2){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]][posicion[1]+2] = "E"
    }
  }
  if(posicion[2] == "O"){
    if(posicion[1] > 1){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]][posicion[1]-2] = "O"
    }
  }
  return mapa;
}

export function comando_avanzar(mapa, posicion){
  if(posicion[2] == "N"){
    if(posicion[0] > 0){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]-1][posicion[1]] = "N"
    }
  }
  if(posicion[2] == "S"){
    if(posicion[0] < mapa.length-1){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]+1][posicion[1]] = "S"
    }
  }
  if(posicion[2] == "E"){
    if(posicion[1] < mapa[posicion[0]].length - 1){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]][posicion[1]+1] = "E"
    }
  }
  if(posicion[2] == "O"){
    if(posicion[1] > 0){
      mapa[posicion[0]][posicion[1]] = 0;
      mapa[posicion[0]][posicion[1]-1] = "O"
    }
  }

  return mapa;
}

export function avance(mapa, posicion, orden){
  if(orden == "A"){
    mapa = comando_avanzar(mapa, posicion);
  }else{
    if(orden == "S"){
      mapa = comando_saltar(mapa, posicion);
    }
  }
  return mapa;
}


export function movimiento(mapa, posicion, orden) {
  if(orden == "I" || orden == "D"){
    mapa = cambiarDireccion(mapa, posicion, orden);
  }else{
    mapa = avance(mapa, posicion, orden);
  }
  return mapa
}



export function ubicarOrigenEnMapa(MatrizyPO) {
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

export function nuevoEstado(mapa) {
  for (var i = 0; i < mapa.length; i++) {
    for (var j = 0; j < mapa[i].length; j++) {
      if(mapa[i][j] != 0){
        var direccion = [i,j,mapa[i][j]]
      }
    }
  }
  return direccion
}



export function decifrarCadena(cadena) {
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

export function eliminarComadeOrigen(origen){
  origen.splice(1, 1);
  return origen
}

export function ejecutarMovimientos(mapa, mensaje){
  var posicion = mensaje[1];
  for (var i = 0; i < mensaje[2].length; i++) {
    mapa = movimiento(mapa, posicion, mensaje[2][i]);
    posicion = nuevoEstado(mapa);
  }
  var resultado = posicion;
  return resultado;
}



// FUNCION PRINCIPAL

export function RecepcionDeOrden(cadena) {
  var mensaje = decifrarCadena(cadena);
  mensaje[1] = eliminarComadeOrigen(mensaje[1]);
  var mapa = ubicarOrigenEnMapa(mensaje);
  var resultado = mensaje;
  if(mapa != false){
    if(verificarValidez(mensaje) == true){
      resultado = ejecutarMovimientos(mapa, mensaje);
    }else{
      resultado = "Orden Invalida";
    }
  }
  return resultado;
}



