import { SistemaLuz } from "./SistemaLuz";
import { SistemaSom } from "./SistemaSom";
import { SistemaTV } from "./SistemaTV";

export class HomeTheaterFacade {
  constructor(
    private tv: SistemaTV,
    private luz: SistemaLuz,
    private som: SistemaSom
  ) {}

  ligarTudo(): void {
    console.log("Ligando todos os sistemas:");
    this.tv.ligar();
    this.luz.apagar();
    this.som.ligar();
  }
}
