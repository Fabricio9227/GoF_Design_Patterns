import { HistoryManager } from "./HistoryManager";
import { TextEditor } from "./TextEditor";

const editor = new TextEditor();
const history = new HistoryManager();

// Estado inicial
editor.type("Olá");
console.log(`Editor: [${editor.getContent()}]`);
history.addMemento(editor.save()); // Salva "Olá"

editor.type("Mundo");
console.log(`Editor: [${editor.getContent()}]`);
history.addMemento(editor.save()); // Salva "Olá Mundo"

editor.type("!!!");
console.log(`Editor: [${editor.getContent()}]`);
// Não vamos salvar o último estado imediatamente para testar o undo
// history.addMemento(editor.save()); // Salva "Olá Mundo!!!"

console.log(`Editor atual: [${editor.getContent()}]`); // Olá Mundo!!!

console.log("\nDesfazendo...");
let lastMemento = history.getMemento();
if (lastMemento) {
  editor.restore(lastMemento);
}
console.log(`Editor atual: [${editor.getContent()}]`); // Olá Mundo

console.log("Desfazendo...");
lastMemento = history.getMemento();
if (lastMemento) {
  editor.restore(lastMemento);
}
console.log(`Editor atual: [${editor.getContent()}]`); // Olá

console.log("Desfazendo...");
lastMemento = history.getMemento(); // Tenta pegar mais um
if (lastMemento) {
  editor.restore(lastMemento);
}
console.log(`Editor atual: [${editor.getContent()}]`); // Ainda Olá, pois o histórico estava vazio
