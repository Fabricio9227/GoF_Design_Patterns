# 📜 Padrão Interpreter: Decifrando Mini-Linguagens (TypeScript)

Define como "entender" e executar instruções de uma linguagem simples. É como criar um pequeno tradutor ou processador para comandos específicos.

---

## 📌 O que é o Interpreter?

O padrão **Interpreter** (ou Interpretador) é usado para definir uma representação da gramática de uma linguagem, juntamente com um interpretador que usa essa representação para "ler" e processar "frases" (expressões) nessa linguagem. Essencialmente, você transforma cada regra da gramática em uma classe.

### 🎯 Quando usar:

- Quando você tem uma linguagem simples que pode ser representada como uma árvore de sintaxe abstrata (AST).
- Para interpretar scripts, configurações ou comandos simples.
- Quando a eficiência não é a maior preocupação (interpretação pode ser mais lenta que compilação).
- Se a gramática da linguagem é relativamente estável e não muito complexa.

---

## 💡 Analogia simples: Controle de Contador Simples ➕➖

Imagine um **controle remoto super simples para um contador numérico**:

- O controle tem apenas dois botões: `+` (para adicionar 1) e `-` (para subtrair 1).
- Você pode enviar uma **sequência de comandos** como `++-+`.
- O **interpretador** lê essa sequência:
  - `+` : Adiciona 1 ao contador.
  - `+` : Adiciona 1 novamente.
  - `-` : Subtrai 1.
  - `+` : Adiciona 1.

Cada símbolo (`+` ou `-`) é uma "palavra" na nossa mini-linguagem, e o interpretador sabe o que fazer com cada uma.

---

## ✨ Código de Exemplo (Resumo)

O `main.ts` (ou um Parser) lê uma string de comando (ex: `++-+`). Para cada caractere, ele identifica qual `IExpression` (Incremento ou Decremento) usar e a executa sobre um `ExecutionContext` (que guarda o valor atual do contador).

**Lógica principal de interpretação (geralmente no cliente ou parser):**

```typescript
// Para cada caractere no comando '++-':
let expression: IExpression;
if (char === "+") {
  expression = new IncrementExpression();
} else if (char === "-") {
  expression = new DecrementExpression();
}
// Então, executa a expressão:
expression.interpret(context);
```

---

## 🧠 Pontos Chave

✔ Linguagem Clara: As regras da gramática são representadas por classes distintas.  
✔ Extensível: Fácil adicionar novas "palavras" ou "regras" (novas classes de expressão).  
✔ Simples para Gramáticas Simples: Funciona bem para linguagens pequenas e bem definidas.

#### ⚠️ Complexidade: Pode se tornar muito complexo e lento para linguagens com muitas regras.

#### ⚠️ Muitas Classes: Cada regra gramatical pode exigir uma nova classe.

## 📌 Conclusão

O padrão Interpreter é útil para processar linguagens simples, onde cada parte da "frase" pode ser representada por um objeto que sabe como se "interpretar". É como dar vida às regras de uma linguagem.

> ✨ "Decifrando comandos, uma regra de cada vez."
