import { EditorMemento } from "./EditorMemento";

// O Caretaker é responsável por guardar os Mementos.
// Ele não opera ou examina o conteúdo dos Mementos.
export class HistoryManager {
  private mementos: EditorMemento[] = [];

  public addMemento(memento: EditorMemento): void {
    this.mementos.push(memento);
  }

  public getMemento(): EditorMemento | undefined {
    if (this.mementos.length === 0) {
      console.log("Histórico de Mementos vazio. Nada para desfazer.");
      return undefined;
    }
    // Retorna e remove o último memento (comportamento de pilha para Undo)
    return this.mementos.pop();
  }

  // Método para verificar se há algo no histórico, apenas para demonstração
  public hasHistory(): boolean {
    return this.mementos.length > 0;
  }
}
