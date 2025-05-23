import { Televisao } from "./Televisao";
import { ControleRemoto } from "./ControleRemoto";

const tv = new Televisao();
const controle = new ControleRemoto(tv);

controle.pressionarBotaoLigar();   // TV ligada
controle.pressionarBotaoDesligar(); // TV desligada