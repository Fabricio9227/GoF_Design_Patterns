import { IObserver } from "./IObserver";

export interface ISubject {
  subscribe(observer: IObserver): void; // Anexar um observador
  unsubscribe(observer: IObserver): void; // Desanexar um observador
  notify(): void; // Notificar todos os observadores
}
