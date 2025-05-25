import { CEOApprover } from "./CEOApprover";
import { DirectorApprover } from "./DirectorApprover";
import { IApprover } from "./IApprover";
import { ManagerApprover } from "./ManagerApprover";

// 1. Montar a cadeia de responsabilidade
const manager: IApprover = new ManagerApprover();
const director: IApprover = new DirectorApprover();
const ceo: IApprover = new CEOApprover();

manager.setNext(director).setNext(ceo); // Encadeando os aprovadores

// 2. Lista de despesas para processar
const expenses = [80, 750, 3500, 15000];

expenses.forEach((expense) => {
  console.log(`Processando pedido de R$${expense}:`);
  manager.tryApprove(expense); // Sempre começa pelo primeiro elo da cadeia
  console.log(""); // Linha em branco para separar
});
