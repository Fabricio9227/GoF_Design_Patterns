import { IVisitor } from "./IVisitor";

// A interface Element declara um método `accept` que deve
// receber a interface base do visitante como argumento.
export interface IAnimal {
  name: string; // Adicionando um nome para facilitar a identificação
  accept(visitor: IVisitor): void;
}
