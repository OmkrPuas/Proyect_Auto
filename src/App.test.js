import * as auto from "./App.js";

describe("Descifrar", () => {
  it("1. Deberia reconocer el numero de un string", () => {
    expect(auto.decifrarCadena("5")).toEqual([5]);
  });
  it("2. Deberia reconocer los numero de un string", () => {
    expect(auto.decifrarCadena("5,5")).toEqual([[5,5]]);
  });
  it("3. Deberia reconocer los numeros de un string con otro separador distintos", () => {
    expect(auto.decifrarCadena("5/1")).toEqual([5,"1"]);
  });
  it("4. Deberia dividir en partes la cadena separando por /", () => {
    expect(auto.decifrarCadena("5,5/1")).toEqual([[5,5],"1"]);
  });
  it("5. Ddeberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(auto.decifrarCadena("5,5/a,b")).toEqual([[5,5],["a",",","b"]]);
  });
  it("6. Deberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(auto.decifrarCadena("5,5/1,1")).toEqual([[5,5],[1,",",1]]);
  });
  it("7. Deberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte, y la tercera parte como string en la cadena separada por /", () => {
    expect(auto.decifrarCadena("5,5/1,1N/I")).toEqual([[5,5],[1,",",1,"N"],["I"]]);
  });
  it("8. Ddeberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte y la tercera parte en la cadena separada por /", () => {
    expect(auto.decifrarCadena("5,5/1,1N/IDIDID")).toEqual([[5,5],[1,",",1,"N"],["I","D","I","D","I","D"]]);
  });

  it("9. Deberia crear un array lleno de ceros de Tamanio 5", () => {
    expect(auto.crear_array(5)).toEqual([0,0,0,0,0]);
  });
  it("10. Deberia crear un array lleno de ceros de Tamanio 2x2", () => {
    expect(auto.crear_Matrix(2,2)).toEqual([[0,0],[0,0]]);
  });

  it("11. Deberia ubicar el punto inicial como una direccion en una matriz", () => {
    expect(auto.ubicarOrigenEnMapa([[2,2],[0,1,"N"]])).toEqual([[0,"N"],[0,0]]);
  });

  it("12. Deberia validar el sentido de direccion del punto inicial en una matriz", () => {
    expect(auto.ubicarOrigenEnMapa([[2,2],[0,1,"J"]])).toEqual(false);
  });

  it("13. Deberia validar el punto inicial para acomodar en una matriz", () => {
    expect(auto.ubicarOrigenEnMapa([[2,2],[3,1,"N"]])).toEqual(false);
  });

  it("14. Deberia validar si el comando de movimiento es valido", () => {
    expect(auto.validarComando("N")).toEqual(false);
  });
  it("15. Deberia validar si el comando de movimiento es valido", () => {
    expect(auto.validarComando("A")).toEqual(true);
  });

  it("16. Deberia validar los comandos de movimiento", () => {
    expect(auto.validarComandos(["A","I"])).toEqual(true);
  });
  it("17. Deberia validar los comandos de movimiento", () => {
    expect(auto.validarComandos(["Z","I"])).toEqual(false);
  });

  it("18. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(auto.verificarValidez([[2,2],[3,1,"N"],["A","D"]])).toEqual(false);
  });
  it("19. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(auto.verificarValidez([[2,2],[0,1,"A"],["D","I"]])).toEqual(false);
  });
  it("20. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(auto.verificarValidez([[2,2],[0,1,"S"],["Z","I"]])).toEqual(false);
  });
  it("21. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(auto.verificarValidez([[2,2],[0,1,"S"],["A","I"]])).toEqual(true);
  });

  it("22. Deberia mover el auto en el mapa hacia adelante.", () => {
    expect(auto.movimiento([[0,"S"],[0,0]],[0,1,"S"],"A")).toEqual([[0,0],[0,"S"]]);
  });

  it("23. Hace una lectura del mapa, y devuelve el estado actual y su sentido de direccion.", () => {
    expect(auto.nuevoEstado([[0,"S"],[0,0]])).toEqual([0,1,"S"]);
  });
  
  it("24. Dada una cadena, realizar los movimientos y devolver estado final.", () => {
    expect(auto.RecepcionDeOrden("2,2/1,1N/IA")).toEqual([1,0,"O"]);
  });

  it("25. Deberia validar si el comando de movimiento es valido", () => {
    expect(auto.validarComando("S")).toEqual(true);
  });

  it("26. Deberia validar los comandos de movimiento", () => {
    expect(auto.validarComandos(["A","S"])).toEqual(true);
  });

  it("27. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(auto.verificarValidez([[2,2],[0,1,"S"],["A","S"]])).toEqual(true);
  });

  it("28. Deberia mover el auto en el mapa hacia adelante.", () => {
    expect(auto.movimiento([["S",0,0],[0,0,0],[0,0,0]],[0,0,"S"],"S")).toEqual([[0,0,0],[0,0,0],["S",0,0]]);
  });

  it("29. Dada una cadena, realizar los movimientos y devolver estado final.", () => {
    expect(auto.RecepcionDeOrden("3,3/0,0E/DSIA")).toEqual([2,1,"E"]);
  });



});

