import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { IVisitor } from "./IVisitor";
import { Monkey } from "./Monkey";

export class FeedVisitor implements IVisitor {
  public visitDog(dog: Dog): void {
    console.log(
      `  Veterinário (Alimentação): Dando ração premium para o cão ${dog.name}.`
    );
  }

  public visitCat(cat: Cat): void {
    console.log(
      `  Veterinário (Alimentação): Servindo um delicioso peixe para o gato ${cat.name}.`
    );
  }

  public visitMonkey(monkey: Monkey): void {
    console.log(
      `  Veterinário (Alimentação): Oferecendo uma banana para o macaco ${monkey.name}.`
    );
  }
}
