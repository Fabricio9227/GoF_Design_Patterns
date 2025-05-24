import { Componente } from "./Componente";

export class Arquivo implements Componente {
  constructor(private nome: string) {}

  mostrar(indente = ""): void {
    console.log(`${indente}- ${this.nome}`);
  }
}
