export interface IIterator<T> {
  /** Retorna o elemento atual sem avançar o iterador. */
  current(): T | undefined;
  /** Retorna o elemento atual e avança o iterador para o próximo elemento. */
  next(): T;
  /** Verifica se ainda existem elementos a serem iterados. */
  hasNext(): boolean;
  /** Reinicia o iterador para o início da coleção. */
  reset(): void;
}