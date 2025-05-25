import { IObserver } from "./IObserver";

export class NewsSubscriber implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(news: string, channelName: string): void {
    console.log(`  [${this.name}] Nova notícia de ${channelName}: ${news}`);
  }

  public getName(): string {
    return this.name;
  }
}
