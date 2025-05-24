# 🪶 Padrão de Projeto: Flyweight (TypeScript)

O padrão **Flyweight** permite reutilizar objetos compartilhados para **economizar memória** quando muitos objetos similares são criados.

---

## 📌 O que é o Flyweight?

É um padrão **estrutural** que compartilha objetos comuns entre múltiplos contextos para **reduzir o uso de recursos**.

### 🎯 Quando usar:

- Quando o sistema precisa criar **muitos objetos parecidos**.
- Quando o uso de memória é **muito alto**.

---

## 💡 Analogia simples

Imagine um jogo com **mil soldados idênticos**.  
Em vez de criar mil instâncias, você cria **uma única** e reaproveita, mudando apenas os dados únicos (posição, vida).

---

## 🧠 Benefícios do Flyweight

✔ Reduz o uso de memória  
✔ Compartilha objetos similares  
✔ Ideal para jogos, editores e grandes estruturas repetitivas

---

## 📌 Conclusão

O padrão Flyweight é útil para **otimizar sistemas com muitos objetos semelhantes**, sem perder performance.

> ✨ “Compartilhe o que é igual. Varie só o que for necessário.”
