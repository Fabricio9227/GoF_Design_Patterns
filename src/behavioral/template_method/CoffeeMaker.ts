import { HotBeverageMaker } from "./HotBeverageMaker";

export class CoffeeMaker extends HotBeverageMaker {
  protected brew(): void {
    console.log("Passando o pó de café...");
  }

  protected addCondiments(): void {
    console.log("Adicionando açúcar e leite...");
  }

  // Opcional: sobrescrever o hook se necessário.
  // Se não sobrescrever, usa o da classe mãe.
  // protected customerWantsCondiments(): boolean {
  //   // Exemplo: perguntar ao usuário ou ter uma lógica específica para café
  //   // const answer = confirm("Você gostaria de condimentos no seu café (açúcar, leite)?");
  //   // return answer;
  //   console.log("Para o café, sempre adicionamos condimentos por padrão da casa!");
  //   return true;
  // }

  // Adicionando um método para a mensagem final, chamado no main.ts
  public getReadyMessage(): string {
    return "Café pronto!";
  }
}
