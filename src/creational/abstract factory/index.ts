import { UIFactory } from "./interfaces/UIFactory";
import { TemaEscuroFactory } from "./temaEscuro/TemaEscuroFactory";

// Escolha o tema desejado:

// Ex: const fabrica: UIFactory = new TemaClaroFactory();
const fabrica: UIFactory = new TemaEscuroFactory();

const botao = fabrica.criarBotao();
const caixa = fabrica.criarCaixaDeTexto();

botao.render(); // Ex: "Botão ESCURO renderizado"
caixa.render(); // Ex: "Caixa de texto ESCURA renderizada"
