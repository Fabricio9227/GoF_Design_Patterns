import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { Monkey } from "./Monkey";

// A interface Visitor declara um conjunto de métodos de visitação
// que correspondem às classes de elementos concretos.
// A assinatura de um método de visitação permite que o visitante
// identifique a classe exata do elemento com o qual está lidando.
export interface IVisitor {
  visitDog(dog: Dog): void;
  visitCat(cat: Cat): void;
  visitMonkey(monkey: Monkey): void;
  // Se um novo animal fosse adicionado, um novo método visit<NovoAnimal> seria necessário aqui.
}
