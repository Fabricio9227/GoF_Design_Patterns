import { Pizza } from "./Pizza";
import { Pizzaria } from "./Pizzaria";

class PizzaSaborCalabresa implements Pizza {
  sabor(): void {
    console.log("Pizza de calabresa pronta!");
  }
}

export class PizzariaCalabresa extends Pizzaria {
  criarPizza(): Pizza {
    return new PizzaSaborCalabresa();
  }
}
