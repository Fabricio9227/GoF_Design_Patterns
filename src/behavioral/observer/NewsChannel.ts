import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";
import { NewsSubscriber } from "./NewsSubscriber"; // Usado para o log de cancelamento

export class NewsChannel implements ISubject {
  private observers: IObserver[] = [];
  private latestNews: string = "";
  private channelName: string;

  constructor(name: string) {
    this.channelName = name;
    console.log(`Canal '${this.channelName}' criado.`);
  }

  public subscribe(observer: IObserver): void {
    const isAlreadySubscribed = this.observers.includes(observer);
    if (isAlreadySubscribed) {
      // Para simplificar, não estamos pegando o nome do observer aqui,
      // mas em um sistema real, o observer teria um ID ou nome.
      return console.log(
        `CANAL '${this.channelName}': Observador já inscrito.`
      );
    }
    this.observers.push(observer);
    // Para log, assumimos que o observer é um NewsSubscriber para pegar o nome
    if (observer instanceof NewsSubscriber) {
      console.log(
        `${observer.getName()} se inscreveu no canal '${this.channelName}'.`
      );
    }
  }

  public unsubscribe(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log(
        `CANAL '${this.channelName}': Observador não encontrado para cancelar inscrição.`
      );
    }
    this.observers.splice(observerIndex, 1);
    // Para log, assumimos que o observer é um NewsSubscriber para pegar o nome
    if (observer instanceof NewsSubscriber) {
      console.log(
        `${observer.getName()} cancelou a inscrição do canal '${this.channelName}'.`
      );
    }
  }

  public notify(): void {
    console.log(
      `CANAL '${this.channelName}': Notificando ${this.observers.length} inscritos...`
    );
    for (const observer of this.observers) {
      observer.update(this.latestNews, this.channelName);
    }
  }

  // Método específico do Sujeito para mudar seu estado e notificar
  public publishNews(news: string): void {
    this.latestNews = news;
    console.log(`\nCANAL '${this.channelName}' publicando: ${this.latestNews}`);
    this.notify();
  }
}
