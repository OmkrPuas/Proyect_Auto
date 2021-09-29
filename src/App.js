function sumar(a, b) {
  return a + b;
}

function totalizador(cantidad,precio){
  return descuento(cantidad*precio);
}

function descuento(cuenta){
  let descuento = 0;
  if(cuenta >= 1000){
    descuento = cuenta*0.03;
  }
  if(cuenta >= 3000){
    descuento = cuenta*0.05;
  }
  if(cuenta >= 7000){
    descuento = cuenta*0.07;
  }
  if(cuenta >= 10000){
    descuento = cuenta*0.1;
  }
  if(cuenta >= 30000){
    descuento = cuenta*0.15;
  }

  let total = cuenta - descuento;
  return total;
}

export {sumar, totalizador};
