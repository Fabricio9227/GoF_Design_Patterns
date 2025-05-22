import { Logger } from "./Singleton";

// Tentar obter múltiplas instâncias
const log1 = Logger.getInstance();
log1.log("Primeira mensagem");

const log2 = Logger.getInstance();
log2.log("Segunda mensagem");

// Verificando se são a mesma instância
console.log(log1 === log2); // true

// Ao rodar esse arquivo, a saída será essa:

// Logger criado!
// [2025-05-22T01:00:50.540Z] Primeira mensagem
// [2025-05-22T01:00:50.541Z] Segunda mensagem
// true
