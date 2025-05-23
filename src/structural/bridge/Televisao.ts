import { Dispositivo } from "./Dispositivo";

export class Televisao implements Dispositivo {
  ligar(): void {
    console.log("TV ligada");
  }
  desligar(): void {
    console.log("TV desligada");
  }
}