# 💡 Padrão State: Personalidades Diferentes (TypeScript)

Permite que um objeto mude seu comportamento quando seu "humor" (estado interno) muda. É como se o objeto trocasse de "personalidade".

---

## 📌 O que é o State?

O padrão **State** (ou Estado) permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá mudar de classe. Cada "personalidade" ou "humor" é encapsulada em um objeto de estado separado.

### 🎯 Quando usar:

- Quando o comportamento de um objeto depende muito do seu estado atual.
- Para evitar muitos `if/else` ou `switch` que verificam o estado do objeto.
- Quando você quer que as transições de estado sejam explícitas.

---

## 💡 Analogia simples: Interruptor de Luz 🔘✨

Imagine um **interruptor de luz**:

- **Estado Desligado:** Se você pressionar, a luz ACENDE e o interruptor vai para o estado "Ligado".
- **Estado Ligado:** Se você pressionar, a luz APAGA e o interruptor volta para o estado "Desligado".

A mesma ação ("pressionar o interruptor") tem resultados diferentes dependendo do estado atual da luz.

---

## ✨ Código de Exemplo (Resumo)

O `LightSwitch` (Interruptor) guarda o seu estado atual (Ligado ou Desligado). Quando alguém o pressiona, o `LightSwitch` pede ao seu estado atual para realizar a ação. O estado, então, pode mudar o estado do `LightSwitch`.

**`LightSwitch.ts` (O Interruptor - trecho):**

```typescript
private currentState: ILightState;

constructor() {
  // Começa desligado
  this.currentState = new OffState();
}

public press(): void {
  // Delega a ação para o estado atual
  this.currentState.handlePress(this);
}

public setState(newState: ILightState): void {
  this.currentState = newState;
  console.log(`O interruptor agora está ${newState.getName()}.`);
}
```

## 🧠 Pontos Chave

✔ Comportamento Organizado: Cada estado tem sua própria lógica, bem separada.  
✔ Menos Condicionais: Adeus aos if/else gigantes baseados em estado!  
✔ Fácil Adicionar Estados: Adicionar um novo "humor" ou "personalidade" é mais simples.

#### ⚠️ Muitas Classes: Se houver muitos estados, pode acabar com muitas classes pequenas.

## 📌 Conclusão

O padrão State ajuda a criar objetos que se comportam de maneiras diferentes dependendo da sua situação interna, de forma limpa e organizada. É como dar ao seu objeto diferentes "modos de operação".

> ✨ "Humor diferente (estado), reação diferente."
