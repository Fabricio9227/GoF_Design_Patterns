const computador = new ComputadorBuilder()
  .setCPU("Intel Core i9")
  .setRAM("32GB")
  .setSSD("1TB")
  .setPlacaDeVideo("NVIDIA RTX 4090")
  .build();

computador.descricao();

// Ao rodar esse arquivo, a sáida será:

// Computador montado:
// CPU: Intel Core i9
// RAM: 32GB
// SSD: 1TB
// Placa de vídeo: NVIDIA RTX 4090
