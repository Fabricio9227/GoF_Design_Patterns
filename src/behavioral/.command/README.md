# ⏯️ Padrão Command: Ações como Objetos (TypeScript)

Transforma um pedido ou uma ação em um objeto independente. Isso permite que você guarde pedidos, coloque-os em fila, registre ou até mesmo desfaça operações.

---

## 📌 O que é o Command?

O padrão **Command** (ou Comando) encapsula uma solicitação (a "ação") como um objeto. Isso desacopla o objeto que invoca a operação (o "solicitante") do objeto que sabe como realizar a operação (o "receptor" ou "executor").

### 🎯 Quando usar:

- Para parametrizar objetos com ações (ex: botões de um menu que executam diferentes comandos).
- Para enfileirar operações, executá-las em momentos diferentes ou registrá-las.
- Para implementar funcionalidades de "desfazer/refazer".
- Para desacoplar quem pede de quem efetivamente executa a ação.

---

## 💡 Analogia simples: Pedido no Restaurante 📝👨‍🍳

Imagine fazer um **pedido em um restaurante**:

- **Você (Cliente)** decide o que quer (ex: "um hambúrguer").
- Você anota o pedido em uma **comanda (Command)**. Essa comanda contém todas as informações sobre o seu pedido.
- Você entrega a comanda ao **garçom (Invoker)**.
- O garçom leva a comanda para a **cozinha (Receiver)**, onde o cozinheiro prepara o prato.

A comanda (Command) é um objeto que representa o seu pedido. Ela pode ser passada adiante, enfileirada, etc., e o garçom não precisa saber como fazer o hambúrguer, apenas como entregar o pedido.

---

## ✨ Código de Exemplo (Resumo)

O `SimpleRemoteControl` (Invocador) tem um "slot" para um `ICommand`. Quando seu método `pressButton()` é chamado, ele simplesmente diz ao comando para `execute()`. O comando, por sua vez, sabe qual `Light` (Receptor) deve operar.

**`SimpleRemoteControl.ts` (O Controle Remoto - trecho):**

```typescript
private slot: ICommand;

public setCommand(command: ICommand): void {
  this.slot = command;
}

public pressButton(): void {
  if (this.slot) {
    this.slot.execute();
  } else {
    console.log("Nenhum comando configurado no controle.");
  }
}
```

## 🧠 Pontos Chave

✔ Desacoplamento: O objeto que invoca a ação não precisa saber como ela é feita, nem quem a faz.  
✔ Flexibilidade: Comandos são objetos, então podem ser passados como parâmetros, guardados, etc.  
✔ Extensibilidade: Fácil adicionar novos comandos sem mudar o invocador.  
✔ Desfazer/Refazer: Comandos podem ter um método undo(). (Não mostrado neste exemplo simples).

#### ⚠️ Muitas Classes: Pode levar a um grande número de classes pequenas para cada comando.

## 📌 Conclusão

O padrão Command transforma ações em objetos, dando muito mais flexibilidade e controle sobre quando e como as operações são executadas. É como ter "ações portáteis".

> ✨ "Não faça, peça! (E o pedido é um objeto)."
