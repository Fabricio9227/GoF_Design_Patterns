import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Monkey implements IAnimal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public accept(visitor: IVisitor): void {
    console.log(`Macaco ${this.name} aceitando o visitante...`);
    visitor.visitMonkey(this);
  }

  public climbTree(): string {
    return "Subindo na árvore!";
  }
}
