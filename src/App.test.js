import {decifrarCadena, crear_Matrix, crear_array, ubicarOrigen} from "./App.js";

describe("Descifrar", () => {
  it("deberia reconocer el numero de un string", () => {
    expect(decifrarCadena("5")).toEqual([5]);
  });
  it("deberia reconocer los numero de un string", () => {
    expect(decifrarCadena("5,5")).toEqual([[5,5]]);
  });
  it("deberia reconocer los numeros de un string con otro separador distintos", () => {
    expect(decifrarCadena("5/1")).toEqual([5,"1"]);
  });
  it("deberia dividir en partes la cadena separando por /", () => {
    expect(decifrarCadena("5,5/1")).toEqual([[5,5],"1"]);
  });
  it("deberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/a,b")).toEqual([[5,5],["a",",","b"]]);
  });
  it("deberia reconocer los numeros de la primera parte, y separar los elementos de la segunda parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1")).toEqual([[5,5],[1,",",1]]);
  });
  it("deberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte, y la tercera parte como string en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1N/I")).toEqual([[5,5],[1,",",1,"N"],["I"]]);
  });
  it("deberia reconocer los numeros de la primera parte y la segunda parte, y las letras de la segunda parte y la tercera parte en la cadena separada por /", () => {
    expect(decifrarCadena("5,5/1,1N/IDIDID")).toEqual([[5,5],[1,",",1,"N"],["I","D","I","D","I","D"]]);
  });

  it("deberia crear un array lleno de ceros de Tamanio 5", () => {
    expect(crear_array(5)).toEqual([0,0,0,0,0]);
  });
  it("deberia crear un array lleno de ceros de Tamanio 2x2", () => {
    expect(crear_Matrix(2,2)).toEqual([[0,0],[0,0]]);
  });

  it("deberia ubicar el punto inicial como una direccion en una matriz", () => {
    expect(ubicarOrigen([[2,2],[0,1,"N"]])).toEqual([[0,"N"],[0,0]]);
  });

});

