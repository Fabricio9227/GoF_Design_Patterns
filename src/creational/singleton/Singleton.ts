// Define a classe Logger como Singleton
export class Logger {
  // Propriedade estática que armazena a única instância da classe
  private static instancia: Logger; // A única instância da classe

  // Construtor privado impede que a classe seja instanciada fora dela mesma
  private constructor() {
    // Mensagem exibida quando o Logger é criado
    console.log("Logger criado!");
  }

  // Método estático para obter a instância única do Logger
  public static getInstance(): Logger {
    // Se ainda não existe uma instância, cria uma nova
    if (!Logger.instancia) {
      Logger.instancia = new Logger();
    }
    // Retorna a instância única
    return Logger.instancia;
  }

  // Método para registrar mensagens no console com data e hora
  public log(mensagem: string): void {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] ${mensagem}`);
  }
}
