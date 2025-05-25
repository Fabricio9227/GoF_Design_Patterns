import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { FeedVisitor } from "./FeedVisitor";
import { HealthCheckVisitor } from "./HealthCheckVisitor";
import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";
import { Monkey } from "./Monkey";

// A estrutura de objetos (nossos animais)
const animals: IAnimal[] = [
  new Dog("Rex"),
  new Cat("Miau"),
  new Monkey("Caco"),
];

// Criando os visitantes
const healthChecker = new HealthCheckVisitor();
const feeder = new FeedVisitor();

// Função cliente para executar a visitação
function clientCode(
  elements: IAnimal[],
  visitor: IVisitor,
  visitorDescription: string
) {
  console.log(`\n--- Operações com o Visitante ${visitorDescription} ---`);
  for (const element of elements) {
    element.accept(visitor); // O elemento "aceita" o visitante
  }
}

// Levando o veterinário para fazer um check-up
clientCode(animals, healthChecker, "de Check-up de Saúde");

// Levando o tratador para alimentar os animais
clientCode(animals, feeder, "Alimentador");
