import {decifrarCadena, crear_Matrix, crear_array, ubicarOrigen, validarComando, validarComandos, verificarValidez, movimiento, nuevoEstado, RecepcionDeOrden} from "./App.js";

describe("Descifrar", () => {
  it("1. Deberia reconocer el numero de un string", () => {
    expect(decifrarCadena("5")).toEqual([5]);
  });
  it("2. Deberia reconocer los numero de un string", () => {
    expect(decifrarCadena("5,5")).toEqual([[5,5]]);
  });
  it("3. Deberia reconocer los numeros de un string con otro separador distintos", () => {
    expect(decifrarCadena("5/1")).toEqual([5,"1"]);
  });
  it("4. Deberia dividir en partes la cadena separando por /", () => {
    expect(decifrarCadena("5,5/1")).toEqual([[5,5],"1"]);
  });
  it("5. Ddeberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/a,b")).toEqual([[5,5],["a",",","b"]]);
  });
  it("6. Deberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1")).toEqual([[5,5],[1,",",1]]);
  });
  it("7. Deberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte, y la tercera parte como string en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1N/I")).toEqual([[5,5],[1,",",1,"N"],["I"]]);
  });
  it("8. Ddeberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte y la tercera parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1N/IDIDID")).toEqual([[5,5],[1,",",1,"N"],["I","D","I","D","I","D"]]);
  });

  it("9. Deberia crear un array lleno de ceros de Tamanio 5", () => {
    expect(crear_array(5)).toEqual([0,0,0,0,0]);
  });
  it("10. Deberia crear un array lleno de ceros de Tamanio 2x2", () => {
    expect(crear_Matrix(2,2)).toEqual([[0,0],[0,0]]);
  });

  it("11. Deberia ubicar el punto inicial como una direccion en una matriz", () => {
    expect(ubicarOrigen([[2,2],[0,1,"N"]])).toEqual([[0,"N"],[0,0]]);
  });

  it("12. Deberia validar el sentido de direccion del punto inicial en una matriz", () => {
    expect(ubicarOrigen([[2,2],[0,1,"J"]])).toEqual(false);
  });

  it("13. Deberia validar el punto inicial para acomodar en una matriz", () => {
    expect(ubicarOrigen([[2,2],[3,1,"N"]])).toEqual(false);
  });

  it("14. Deberia validar si el comando de movimiento es valido", () => {
    expect(validarComando("N")).toEqual(false);
  });
  it("15. Deberia validar si el comando de movimiento es valido", () => {
    expect(validarComando("A")).toEqual(true);
  });

  it("16. Deberia validar los comandos de movimiento", () => {
    expect(validarComandos(["A","I"])).toEqual(true);
  });
  it("17. Deberia validar los comandos de movimiento", () => {
    expect(validarComandos(["Z","I"])).toEqual(false);
  });

  it("18. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(verificarValidez([[2,2],[3,1,"N"],["A","D"]])).toEqual(false);
  });
  it("19. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(verificarValidez([[2,2],[0,1,"A"],["D","I"]])).toEqual(false);
  });
  it("20. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(verificarValidez([[2,2],[0,1,"S"],["Z","I"]])).toEqual(false);
  });
  it("21. Deberia validar si el origen y los comandos son validos para la matriz.", () => {
    expect(verificarValidez([[2,2],[0,1,"S"],["A","I"]])).toEqual(true);
  });

  it("22. Deberia mover el auto en el mapa hacia adelante.", () => {
    expect(movimiento([[0,"S"],[0,0]],[0,1,"S"],"A")).toEqual([[0,0],[0,"S"]]);
  });

  it("23. Hace una lectura del mapa, y devuelve el estado actual y su sentido de direccion.", () => {
    expect(nuevoEstado([[0,"S"],[0,0]])).toEqual([0,1,"S"]);
  });
  
  it("24. Dada una cadena, realizar los movimientos y devolver estado final.", () => {
    expect(RecepcionDeOrden("2,2/1,1N/IA")).toEqual([1,0,"O"]);
  });



});

