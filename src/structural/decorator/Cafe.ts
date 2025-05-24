import { Bebida } from "./Bebida";

export class Cafe implements Bebida {
  descricao(): string {
    return "Café";
  }

  preco(): number {
    return 5;
  }
}
