import { Soldado } from "./Soldado";

export class FabricaDeSoldados {
  private soldados: Record<string, Soldado> = {};

  obterSoldado(tipo: string): Soldado {
    if (!this.soldados[tipo]) {
      console.log(`Criando novo soldado tipo ${tipo}`);
      this.soldados[tipo] = new Soldado(tipo);
    }
    return this.soldados[tipo];
  }
}
