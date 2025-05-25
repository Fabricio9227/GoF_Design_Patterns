import { EditorMemento } from "./EditorMemento";

// O Originator é o objeto cujo estado queremos salvar e restaurar.
export class TextEditor {
  private content: string;

  constructor(initialContent: string = "") {
    this.content = initialContent;
  }

  public type(words: string): void {
    this.content += (this.content ? " " : "") + words;
  }

  public getContent(): string {
    return this.content;
  }

  // Cria um Memento contendo um snapshot do estado atual do editor.
  public save(): EditorMemento {
    console.log("Salvando estado...");
    return new EditorMemento(this.content);
  }

  // Restaura o estado do editor a partir de um objeto Memento.
  public restore(memento: EditorMemento): void {
    this.content = memento.getSavedContent();
  }
}
