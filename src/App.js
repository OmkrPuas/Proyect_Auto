function sumar(a, b) {
  return a + b;
}

function totalizador(cantidad, precio, estado){
  let total = descuento(cantidad*precio);
  let impuesto = impuestos(cantidad*precio, estado);
  return total + impuesto;
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

function impuestos(cuenta, estado){
  let impuesto = 0;
  if(estado == "UT"){
    impuesto = cuenta*0.0665;
  }
  if(estado == "NV"){
    impuesto = cuenta*0.08;
  }
  if(estado == "TX"){
    impuesto = cuenta*0.0625;
  }
  if(estado == "AL"){
    impuesto = cuenta*0.04;
  }
  if(estado == "CA"){
    impuesto = cuenta*0.0825;
  }

  return impuesto;
}

export {sumar, totalizador};
