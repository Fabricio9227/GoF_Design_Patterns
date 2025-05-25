export class EditorMemento {
  private readonly savedContent: string; // readonly para imutabilidade após criação

  constructor(content: string) {
    this.savedContent = content;
  }

  // O Caretaker não deve modificar o estado do Memento.
  // O Originator usa este método para restaurar seu estado.
  public getSavedContent(): string {
    return this.savedContent;
  }
}
