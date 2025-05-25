// iterator-pattern-simple/main.ts
import { WordCollection } from "./WordCollection";

const wordList = new WordCollection();
wordList.addItem("Olá");
wordList.addItem("Mundo");
wordList.addItem("Iterator");
wordList.addItem("Simples");

const iterator = wordList.createIterator();

console.log("Iterando pela lista de palavras:");
while (iterator.hasNext()) {
  const word = iterator.next();
  console.log(`- ${word}`);
}

console.log("\nDemonstrando 'current()' e 'reset()':");
iterator.reset(); // Volta para o início

if (iterator.hasNext()) {
  console.log("Primeiro item (usando current()):", iterator.current());
  iterator.next(); // Avança para "Mundo"
  console.log("Segundo item (usando current()):", iterator.current());
}

iterator.reset();
console.log("\nIterando e mostrando 'current()' antes de 'next()':");
while (iterator.hasNext()) {
  console.log(`  Item atual (current): ${iterator.current()}`);
  const nextItem = iterator.next();
  console.log(`  Item obtido (next): ${nextItem}`);
}
console.log(`  Ainda tem próximo? ${iterator.hasNext()}`);
console.log(`  Item atual no final: ${iterator.current()}`);
