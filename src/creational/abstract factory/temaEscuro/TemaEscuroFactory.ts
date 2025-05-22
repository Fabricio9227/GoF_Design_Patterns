import { Botao } from "../interfaces/Botao";
import { CaixaDeTexto } from "../interfaces/CaixaDeTexto";
import { UIFactory } from "../interfaces/UIFactory";
import { BotaoEscuro } from "./BotaoEscuro";
import { CaixaDeTextoEscuro } from "./CaixaDeTextoEscuro";

export class TemaEscuroFactory implements UIFactory {
  criarBotao(): Botao {
    return new BotaoEscuro();
  }

  criarCaixaDeTexto(): CaixaDeTexto {
    return new CaixaDeTextoEscuro();
  }
}
