import {sumar, totalizador} from "./App.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("Deberia mostrar cuantos productos se compra", () => {
    expect(totalizador(3)).toEqual(3);
  });
  
});

