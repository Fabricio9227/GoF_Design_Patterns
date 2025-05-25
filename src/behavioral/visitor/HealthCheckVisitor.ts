import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { IVisitor } from "./IVisitor";
import { Monkey } from "./Monkey";

// Visitantes Concretos implementam várias versões do mesmo comportamento,
// adaptadas para diferentes classes de elementos concretos.
export class HealthCheckVisitor implements IVisitor {
  public visitDog(dog: Dog): void {
    console.log(
      `  Veterinário (Check-up): Examinando o cão ${dog.name}. Parece saudável!`
    );
  }

  public visitCat(cat: Cat): void {
    console.log(
      `  Veterinário (Check-up): Verificando os pelos do gato ${cat.name}. Tudo certo!`
    );
  }

  public visitMonkey(monkey: Monkey): void {
    console.log(
      `  Veterinário (Check-up): Observando o comportamento ágil do macaco ${monkey.name}.`
    );
  }
}
