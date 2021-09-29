import {sumar, totalizador} from "./App.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("Deberia mostrar cuantos productos se compra", () => {
    expect(totalizador(3,1)).toEqual(3);
  });
  it("Deberia mostrar el precio de comprar X productos con Y costo", () => {
    expect(totalizador(3,5)).toEqual(15);
  });
});

