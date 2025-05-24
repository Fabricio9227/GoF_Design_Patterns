// 1. A classe final que queremos montar

class Computador {
  cpu?: string;
  ram?: string;
  ssd?: string;
  placaDeVideo?: string;

  descricao(): void {
    console.log("Computador montado:");
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`SSD: ${this.ssd}`);
    console.log(`Placa de vídeo: ${this.placaDeVideo}`);
  }
}
