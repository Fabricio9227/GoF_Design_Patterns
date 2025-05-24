# 🧱 Padrão de Projeto: Builder (TypeScript)

Este projeto demonstra o uso do **padrão de criação Builder**, usando o exemplo de montagem de um **Computador** passo a passo.

---

## 📌 O que é o Builder?

O **Builder** é um padrão de projeto do tipo **creacional** (de criação), que permite construir objetos **complexos** de forma **controlada e flexível**, sem depender de construtores gigantes com muitos parâmetros.

### 🎯 Quando usar:

- Quando um objeto tem **muitos atributos opcionais**.
- Quando o processo de criação precisa ser **dividido em etapas**.
- Para tornar o código **mais legível e fácil de manter**.

---

## 💡 Analogia simples

Imagine montar um **hambúrguer** em uma lanchonete:

- Você escolhe o **pão**, **carne**, **molho**, **salada**...
- Você monta **etapa por etapa**.
- No final, você **confirma** e recebe o lanche completo.

O padrão **Builder faz isso com objetos**!

---

## 📁 Estrutura do código

```
.
├── Builder.ts          # Classe final a ser construída
├── ComputadorBuilder.ts   # Classe Builder que monta passo a passo
└── index.ts               # Código de uso/teste
```

## 🧠 Benefícios do Builder

✔ Criação **flexível**  
✔ Código **limpo e legível**  
✔ Fácil de **manter**  
✔ Ideal para objetos com muitos atributos opcionais

---

## 📌 Conclusão

O Builder facilita a vida do desenvolvedor ao criar objetos complexos sem bagunçar o código com construtores grandes e difíceis de ler.

> ✨ “Monte seus objetos como monta um lanche: com calma, em etapas, e do seu jeito.”

