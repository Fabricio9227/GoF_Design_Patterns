import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Dog implements IAnimal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Cada Elemento Concreto deve implementar o método `accept` de tal forma
  // que ele chame o método do visitante correspondente à sua classe.
  public accept(visitor: IVisitor): void {
    console.log(`Cachorro ${this.name} aceitando o visitante...`);
    visitor.visitDog(this); // Isso é o "double dispatch" em ação
  }

  // Métodos específicos do Dog, se houver, que o visitor poderia usar
  public bark(): string {
    return "Au au!";
  }
}
