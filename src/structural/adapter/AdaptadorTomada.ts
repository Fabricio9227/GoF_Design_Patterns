import { TomadaAntiga } from "./TomadaAntiga";
import { TomadaNova } from "./TomadaNova";

export class AdaptadorTomada implements TomadaNova {
  private tomadaAntiga: TomadaAntiga;

  constructor(tomadaAntiga: TomadaAntiga) {
    this.tomadaAntiga = tomadaAntiga;
  }

  conectarNovoPino(): void {
    console.log("Usando adaptador...");
    this.tomadaAntiga.conectar();
  }
}