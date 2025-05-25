import { IIterator } from "./IIterator";
import { WordCollection } from "./WordCollection"; // Precisa conhecer a coleção concreta

export class WordIterator implements IIterator<string> {
  private collection: WordCollection;
  private position: number = 0;

  constructor(collection: WordCollection) {
    this.collection = collection;
  }

  public current(): string | undefined {
    if (this.position < this.collection.getCount()) {
      return this.collection.getItems()[this.position];
    }
    return undefined;
  }

  public next(): string {
    if (!this.hasNext()) {
      return this.collection.getItems()[this.position]; // Isso pode dar undefined se position estiver fora dos limites
    }
    const item = this.collection.getItems()[this.position];
    this.position++;
    return item;
  }

  public hasNext(): boolean {
    return this.position < this.collection.getCount();
  }

  public reset(): void {
    this.position = 0;
  }
}
