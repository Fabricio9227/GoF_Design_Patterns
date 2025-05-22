import { Botao } from "./Botao";
import { CaixaDeTexto } from "./CaixaDeTexto";

export interface UIFactory {
  criarBotao(): Botao;
  criarCaixaDeTexto(): CaixaDeTexto;
}