# 💾 Padrão Memento: Salvando e Restaurando Estados (TypeScript)

Permite "tirar uma foto" (salvar) do estado interno de um objeto e, mais tarde, restaurá-lo para esse estado, sem quebrar o encapsulamento do objeto.

---

## 📌 O que é o Memento?

O padrão **Memento** (que significa "lembrança" ou "recordação") permite capturar e externalizar o estado interno de um objeto (o **Originator**) para que ele possa ser restaurado a esse estado mais tarde. Tudo isso sem violar o encapsulamento, ou seja, sem expor os detalhes internos do Originator para o mundo.

### 🎯 Quando usar:

- Para implementar funcionalidades de "desfazer/refazer" em aplicações.
- Quando você precisa salvar "checkpoints" do estado de um objeto em momentos críticos para possível reversão.
- Para proteger a integridade do estado de um objeto, permitindo que apenas o próprio objeto (Originator) acesse os detalhes do estado salvo no Memento.

---

## 💡 Analogia simples: "Salvar Jogo" ou Ctrl+Z 🎮📝🔄

Pense em **"Salvar Jogo"** num videogame:

- **O Jogo (Originator):** É o objeto cujo estado você quer salvar (nível, itens, posição do personagem).
- **O "Save Game" (Memento):** É a "foto" do estado do jogo naquele momento. Ele guarda os dados, mas não deixa outros mexerem neles.
- **O Memory Card ou Lista de Saves (Caretaker):** É quem guarda os "saves" (Mementos) de forma segura, sem entender o que tem dentro deles. Ele só sabe guardar e devolver quando pedido.

Ou, mais simples ainda, o **Ctrl+Z (Desfazer)** num editor de texto:

- O editor é o Originator.
- Cada estado do texto antes de uma mudança é salvo num Memento.
- Um histórico de ações (Caretaker) guarda esses Mementos.

---

## ✨ Código de Exemplo (Resumo)

O `TextEditor` (Originator) pode criar um `EditorMemento` para "fotografar" seu conteúdo atual. O `HistoryManager` (Caretaker) armazena esses Mementos. Para "desfazer", o `TextEditor` pega o último Memento do `HistoryManager` e restaura seu conteúdo a partir dele.

**`TextEditor.ts` (O Editor - trecho):**

```typescript
private content: string = "";

public save(): EditorMemento {
  // Cria uma "foto" do estado atual
  return new EditorMemento(this.content);
}

public restore(memento: EditorMemento): void {
  // Volta para o estado da "foto"
  this.content = memento.getSavedContent();
}
```

---

## 🧠 Pontos Chave

✔ Encapsulamento Preservado: O estado interno do Originator não é exposto. O Caretaker só lida com o objeto Memento "opaco".  
✔ Simplifica o Originator: O Originator não precisa se preocupar em gerenciar versões do seu estado.  
✔ Coesão: A responsabilidade de salvar/restaurar estado fica bem definida.

#### ⚠️ Custo de Memória: Se os Mementos forem grandes ou muitos forem criados, pode consumir bastante memória.

#### ⚠️ Custo de Transferência: Copiar o estado para o Memento pode ser custoso para objetos complexos.

## 📌 Conclusão

O Memento é sua "máquina do tempo" para os estados dos objetos. Ele permite que você volte atrás de forma segura e organizada, crucial para funcionalidades como "desfazer" ou "checkpoints".

> ✨ "Oops, errei? Deixa eu pegar minha 'foto' (Memento) anterior!"
