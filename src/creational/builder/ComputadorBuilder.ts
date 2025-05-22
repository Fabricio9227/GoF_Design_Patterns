// 2. O Builder que constrói o computador passo a passo

class ComputadorBuilder {
  private computador: Computador;

  constructor() {
    this.computador = new Computador();
  }

  setCPU(cpu: string): this {
    this.computador.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.computador.ram = ram;
    return this;
  }

  setSSD(ssd: string): this {
    this.computador.ssd = ssd;
    return this;
  }

  setPlacaDeVideo(gpu: string): this {
    this.computador.placaDeVideo = gpu;
    return this;
  }

  build(): Computador {
    return this.computador;
  }
}
