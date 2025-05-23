import { Decorator } from "./Decorator";

export class Leite extends Decorator {
  descricao(): string {
    return this.bebida.descricao() + " com leite";
  }

  preco(): number {
    return this.bebida.preco() + 1;
  }
}
