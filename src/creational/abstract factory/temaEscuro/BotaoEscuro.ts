import { Botao } from "../interfaces/Botao";

export class BotaoEscuro implements Botao {
  render(): void {
    console.log("Botão ESCURO renderizado");
  }
}