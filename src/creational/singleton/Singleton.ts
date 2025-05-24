export class Logger {
  private static instancia: Logger; // A única instância da classe

  private constructor() {
    // Construtor privado para impedir new Logger() fora da classe
    console.log("Logger criado!");
  }

  public static getInstance(): Logger {
    if (!Logger.instancia) {
      Logger.instancia = new Logger();
    }
    return Logger.instancia;
  }

  public log(mensagem: string): void {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] ${mensagem}`);
  }
}
