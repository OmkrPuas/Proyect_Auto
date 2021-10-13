import {decifrarCadena, crear_Matrix} from "./App.js";

describe("Descifrar", () => {
  it("deberia reconocer el numero de un string", () => {
    expect(decifrarCadena("5")).toEqual(5);
  });

});

