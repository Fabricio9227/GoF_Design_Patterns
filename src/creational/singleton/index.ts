// Importa a classe Logger do arquivo Singleton.ts
import { Logger } from "./Singleton";

// Obtém a instância única do Logger e registra uma mensagem
const log1 = Logger.getInstance();
log1.log("Primeira mensagem");

// Obtém novamente a instância do Logger e registra outra mensagem
const log2 = Logger.getInstance();
log2.log("Segunda mensagem");

// Verifica se log1 e log2 são a mesma instância (deve ser true, pois é um Singleton)
console.log(log1 === log2); // true

// Comentário explicando a saída esperada ao rodar o arquivo:
// Logger criado!                -> Mostra que a instância foi criada apenas uma vez
// [data/hora] Primeira mensagem -> Primeira mensagem registrada
// [data/hora] Segunda mensagem  -> Segunda mensagem registrada
// true                         -> Confirma que ambas as variáveis apontam para a mesma instância
