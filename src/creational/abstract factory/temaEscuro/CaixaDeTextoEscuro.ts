import { CaixaDeTexto } from "../interfaces/CaixaDeTexto";

export class CaixaDeTextoEscuro implements CaixaDeTexto {
  render(): void {
    console.log("Caixa de texto ESCURA renderizada");
  }
}
