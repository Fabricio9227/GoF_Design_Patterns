export interface IObserver {
  // Método chamado pelo Sujeito para notificar o Observador
  // Poderia receber o próprio sujeito como parâmetro para mais flexibilidade: update(subject: ISubject): void;
  // Ou dados específicos, como no nosso caso:
  update(news: string, channelName: string): void;
}
