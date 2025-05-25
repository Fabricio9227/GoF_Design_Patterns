import { HotBeverageMaker } from "./HotBeverageMaker";

export class TeaMaker extends HotBeverageMaker {
  protected brew(): void {
    console.log("Infundindo o sachê de chá...");
  }

  protected addCondiments(): void {
    console.log("Adicionando limão...");
  }

  // Opcional: sobrescrever o hook
  protected customerWantsCondiments(): boolean {
    // Para o chá, vamos assumir que o cliente sempre quer condimentos,
    // mas poderíamos ter uma lógica diferente aqui.
    console.log("Cliente quer condimentos!"); // Mantendo a lógica original para simplificar
    return true;
    // Exemplo alternativo:
    // console.log("Para o chá, condimentos são opcionais, vamos perguntar...");
    // return false; // Ou uma lógica para decidir
  }

  // Adicionando um método para a mensagem final, chamado no main.ts
  public getReadyMessage(): string {
    return "Chá pronto!";
  }
}
