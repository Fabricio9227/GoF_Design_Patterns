import { Botao } from "../interfaces/Botao";

export class BotaoClaro implements Botao {
  render(): void {
    console.log("Botão CLARO renderizado");
  }
}