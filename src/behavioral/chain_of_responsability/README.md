# 🔗 Padrão Chain of Responsibility: Passando a Batata Quente (TypeScript)

Evita que quem envia um pedido precise saber quem vai tratar. Vários objetos têm a chance de resolver o pedido, passando-o adiante numa "corrente" até alguém assumir.

---

## 📌 O que é o Chain of Responsibility?

O **Chain of Responsibility** (ou Cadeia de Responsabilidade) é como uma linha de montagem ou uma fila de atendimento. Um pedido entra na "esteira" e passa por diferentes "estações" (objetos manipuladores). Cada estação decide se pode tratar o pedido ou se deve passá-lo para a próxima estação na corrente.

### 🎯 Quando usar:

- Quando mais de um objeto pode tratar um pedido, e qual deles o fará não é conhecido a priori ou pode mudar.
- Para evitar acoplar o remetente de uma solicitação aos seus receptores.
- Quando o conjunto de objetos que podem tratar um pedido deve ser especificado dinamicamente.

---

## 💡 Analogia simples: Aprovação de Despesas 💰🏢

Imagine que você precisa aprovar uma **despesa da empresa**:

- **R$50?** Seu **Gerente Imediato** pode aprovar.
- **R$500?** O Gerente passa para o **Diretor da Área**.
- **R$5.000?** O Diretor passa para o **CEO**.

O pedido de aprovação "sobe" na hierarquia (a cadeia) até encontrar alguém com autoridade suficiente para aprová-lo. Se ninguém puder, o pedido pode ser negado no final da cadeia.

---

## ✨ Código de Exemplo (Resumo)

Cada "Aprovador" na cadeia tem uma referência ao próximo. Ao receber um pedido, ele tenta tratar. Se não puder (ex: valor muito alto), ele passa para o próximo aprovador da lista.

**`BaseApprover.ts` (Lógica comum - trecho):**

```typescript
protected nextApprover: IApprover | null = null;

public setNext(approver: IApprover): IApprover {
  this.nextApprover = approver;
  return approver; // Útil para encadear chamadas de setNext
}

// Cada subclasse implementará sua lógica de aprovação
public abstract tryApprove(amount: number): void;
```

---

## 🧠 Pontos Chave

✔ Desacoplamento: Quem envia não conhece quem trata. O objeto que trata não precisa conhecer toda a cadeia.  
✔ Flexibilidade: A ordem e os membros da cadeia podem ser mudados em tempo de execução.  
✔ Responsabilidade Única: Cada "elo" da cadeia tem sua própria lógica de tratamento.

#### ⚠️ Sem Garantia: Um pedido pode não ser tratado se nenhum objeto na cadeia o fizer.

#### ⚠️ Performance: Se a cadeia for muito longa, pode haver um impacto.

## 📌 Conclusão

O Chain of Responsibility é uma maneira elegante de passar uma solicitação por uma série de processadores até que um deles a resolva. Útil para criar sistemas flexíveis onde múltiplos objetos podem lidar com um tipo de pedido.

> ✨ "Se não é comigo, passo adiante!"
