# 🔌 Padrão de Projeto: Adapter (TypeScript)

Este projeto demonstra o uso do **padrão estrutural Adapter**, que permite que classes com interfaces **incompatíveis** trabalhem juntas, agindo como um **"adaptador de tomada"** no código.

---

## 📌 O que é o Adapter?

O **Adapter** é um padrão de projeto do tipo **estrutural**, que permite que objetos com interfaces diferentes **se comuniquem**. Ele **encapsula** um objeto existente com uma **interface compatível** com o que o sistema espera.

### 🎯 Quando usar:

- Quando você quer **usar uma classe existente**, mas sua interface **não é compatível** com o código que a chama.
- Quando quer **integrar bibliotecas ou sistemas legados** sem modificar seu código original.

---

## 💡 Analogia simples

Imagine que você comprou um secador de cabelo europeu (tomada de 2 pinos redondos) e quer usá-lo no Brasil (tomada de 3 pinos).  
Você não precisa trocar o secador — basta **usar um adaptador de tomada**.

No código, o Adapter **envolve** o objeto antigo e **oferece uma interface que o sistema entende**.

---

## 📁 Estrutura do código

```
.
├── TomadaAntiga.ts
├── TomadaNova.ts
├── AdaptadorTomada.ts
└── index.ts
```

## 🧠 Benefícios do Adapter

✔ Permite reuso de código legado sem alterar sua estrutura  
✔ Facilita a integração entre sistemas com interfaces diferentes  
✔ Mantém o **princípio da responsabilidade única** (SRP)  
✔ Promove um código mais **modular e desacoplado**

---

## 📌 Conclusão

O padrão Adapter é como um **tradutor de interfaces** — ele permite que dois sistemas diferentes **"falem a mesma língua"** sem modificar nenhum dos dois diretamente.

> ✨ “Se não encaixa, adapte.”
