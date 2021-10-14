import {decifrarCadena, crear_Matrix, crear_array, ubicarOrigen, validarComando, validarComandos} from "./App.js";

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

  



});

