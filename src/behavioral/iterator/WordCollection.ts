// iterator-pattern-simple/WordCollection.ts
import { IAggregate } from "./IAggregate";
import { IIterator } from "./IIterator";
import { WordIterator } from "./WordIterator";

export class WordCollection implements IAggregate<string> {
  private items: string[] = [];

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  // Implementação do método da interface Aggregate
  public createIterator(): IIterator<string> {
    return new WordIterator(this); // Passa a própria coleção para o iterador
  }
}
