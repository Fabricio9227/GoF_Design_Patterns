import { Bebida } from "./Bebida";

export abstract class Decorator implements Bebida {
  constructor(protected bebida: Bebida) {}

  abstract descricao(): string;
  abstract preco(): number;
}
