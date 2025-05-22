import { Clonavel } from "./interfaces/Clonavel";

export class Contrato implements Clonavel {
  constructor(
    public titulo: string,
    public texto: string
  ) {}

  clone(): Contrato {
    return new Contrato(this.titulo, this.texto);
  }
}
