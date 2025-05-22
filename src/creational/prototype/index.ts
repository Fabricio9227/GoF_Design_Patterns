import { Contrato } from "./Contrato";

const original = new Contrato("Contrato A", "Conteúdo importante...");
const copia = original.clone();

console.log(original === copia); // false (são objetos diferentes)
console.log(copia.titulo); // Contrato A
console.log(copia.texto); // Conteúdo importante...
