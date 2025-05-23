import { Dispositivo } from "./Dispositivo";

export class ControleRemoto {
  constructor(private dispositivo: Dispositivo) {}

  pressionarBotaoLigar() {
    this.dispositivo.ligar();
  }

  pressionarBotaoDesligar() {
    this.dispositivo.desligar();
  }
}