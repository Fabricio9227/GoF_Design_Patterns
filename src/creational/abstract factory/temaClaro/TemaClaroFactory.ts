import { Botao } from "../interfaces/Botao";
import { CaixaDeTexto } from "../interfaces/CaixaDeTexto";
import { UIFactory } from "../interfaces/UIFactory";
import { BotaoClaro } from "./BotaoClaro";
import { CaixaDeTextoClaro } from "./CaixaDeTextoClaro";

export class TemaClaroFactory implements UIFactory {
  criarBotao(): Botao {
    return new BotaoClaro();
  }

  criarCaixaDeTexto(): CaixaDeTexto {
    return new CaixaDeTextoClaro();
  }
}
