import { Componente } from "./Componente";

export class Pasta implements Componente {
  private filhos: Componente[] = [];

  constructor(private nome: string) {}

  adicionar(componente: Componente): void {
    this.filhos.push(componente);
  }

  mostrar(indente = ""): void {
    console.log(`${indente}+ ${this.nome}`);
    for (const filho of this.filhos) {
      filho.mostrar(indente + "  ");
    }
  }
}
