import { CaixaDeTexto } from "../interfaces/CaixaDeTexto";

export class CaixaDeTextoClaro implements CaixaDeTexto {
  render(): void {
    console.log("Caixa de texto CLARA renderizada");
  }
}
