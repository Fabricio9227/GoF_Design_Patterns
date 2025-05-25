import { CoffeeMaker } from "./CoffeeMaker";
import { TeaMaker } from "./TeaMaker";

console.log("Preparando Café:");
const coffee = new CoffeeMaker();
coffee.prepareBeverage();
console.log(coffee.getReadyMessage());

console.log("\n--------------------\n");

console.log("Preparando Chá:");
const tea = new TeaMaker();
tea.prepareBeverage();
console.log(tea.getReadyMessage());
