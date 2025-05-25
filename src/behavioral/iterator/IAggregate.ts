import { IIterator } from "./IIterator";

export interface IAggregate<T> {
  /** Cria e retorna um iterador para a coleção. */
  createIterator(): IIterator<T>;
}
