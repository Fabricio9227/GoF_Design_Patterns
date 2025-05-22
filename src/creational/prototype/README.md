# 🧬 Padrão de Projeto: Prototype (TypeScript)

Este projeto demonstra o uso do **padrão de criação Prototype**, com um exemplo de clonagem de contratos. O Prototype permite **criar novos objetos copiando outros existentes**, ao invés de instanciá-los diretamente.

---

## 📌 O que é o Prototype?

O **Prototype** é um padrão de projeto do tipo **creacional** (de criação) que permite copiar (ou clonar) objetos já existentes, **sem depender de suas classes concretas**.

### 🎯 Quando usar:

- Quando a criação de um objeto é **cara (lenta, complexa)**.
- Quando você precisa **criar várias cópias** de um mesmo objeto com pequenas variações.

---

## 💡 Analogia simples

Imagine que você tem um **contrato pronto**.  
Em vez de criar outro do zero, você simplesmente **faz uma cópia (xerox)** e edita o que precisar.

---

## 📁 Estrutura do código

```
.
├── interfaces/
│ └── Clonavel.ts
├── Contrato.ts
└── index.ts

```

## 🧠 Benefícios do Prototype

✔ Permite clonar objetos rapidamente.  
✔ Evita recriação manual e duplicada  
✔ Reduz acoplamento com `new`  
✔ Útil para editores de documento, formulários, jogos, etc.

## 📌 Conclusão

O padrão Prototype facilita a criação de cópias de objetos já configurados, tornando o processo mais **eficiente e flexível.**

> ✨ “Em vez de fazer de novo, clone o que já funciona.”
