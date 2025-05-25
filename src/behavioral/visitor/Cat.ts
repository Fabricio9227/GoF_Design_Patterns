import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Cat implements IAnimal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public accept(visitor: IVisitor): void {
    console.log(`Gato ${this.name} aceitando o visitante...`);
    visitor.visitCat(this);
  }

  public purr(): string {
    return "Miau... purrrr...";
  }
}
