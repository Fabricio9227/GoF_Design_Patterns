export class Soldado {
  constructor(public tipo: string) {}

  exibir(): void {
    console.log(`Reutilizando soldado tipo ${this.tipo}`);
  }
}
