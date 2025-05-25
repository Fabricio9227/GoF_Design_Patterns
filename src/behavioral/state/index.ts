import { LightSwitch } from "./LightSwitch";

const mySwitch = new LightSwitch();

console.log(""); // Linha em branco para separar
mySwitch.press(); // Deve ligar

console.log(""); // Linha em branco para separar
mySwitch.press(); // Deve desligar

console.log(""); // Linha em branco para separar
console.log("Pressionando o interruptor novamente...");
mySwitch.press(); // Deve ligar novamente
