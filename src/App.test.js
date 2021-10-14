import {decifrarCadena, crear_Matrix} from "./App.js";

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

});

