# 🏭 Padrão de Projeto: Factory Method (TypeScript)

Este projeto demonstra o uso do **padrão de criação Factory Method**, usando o exemplo de uma pizzaria onde cada filial decide qual tipo de pizza fabricar.

---

## 📌 O que é o Factory Method?

O **Factory Method** é um padrão de projeto do tipo **creacional** (de criação) que permite às subclasses decidir **qual objeto concreto criar**, mantendo o código **desacoplado** da classe exata que será instanciada.

### 🎯 Quando usar:

- Quando você quer **delegar a responsabilidade de criação** para subclasses.
- Quando deseja **flexibilidade para trocar ou adicionar tipos de objetos** sem mudar o código que os usa.

---

## 💡 Analogia simples

Imagine uma **rede de pizzarias**:  
Cada filial implementa seu próprio jeito de fazer pizza (ex: calabresa, marguerita, frango).  
Você só chama `criarPizza()` — e ela te entrega a pizza correta.

---

## 📁 Estrutura do código

```
.
├── Pizza.ts               # Interface da pizza
├── Pizzaria.ts            # Classe abstrata com método de fábrica
├── PizzariaCalabresa.ts   # Subclasse concreta que cria pizza de calabresa
└── index.ts               # Código de uso/teste
```

---

## 🧩 Explicação dos Arquivos

### `Pizza.ts`

```ts
export interface Pizza {
  sabor(): void;
}
```

---

### `Pizzaria.ts`

```ts
import { Pizza } from "./Pizza";

export abstract class Pizzaria {
  abstract criarPizza(): Pizza;
}
```

---

### `PizzariaCalabresa.ts`

```ts
import { Pizzaria } from "./Pizzaria";
import { Pizza } from "./Pizza";

class PizzaCalabresa implements Pizza {
  sabor(): void {
    console.log("Pizza de calabresa pronta!");
  }
}

export class PizzariaCalabresa extends Pizzaria {
  criarPizza(): Pizza {
    return new PizzaCalabresa();
  }
}
```

---

### `index.ts`

```ts
import { PizzariaCalabresa } from "./PizzariaCalabresa";

const pizzaria = new PizzariaCalabresa();
const pizza = pizzaria.criarPizza();

pizza.sabor(); // Pizza de calabresa pronta!
```

---

## ✅ Saída esperada

```
Pizza de calabresa pronta!
```

---

## 🧠 Benefícios do Factory Method

✔ Delega a criação para as subclasses  
✔ Facilita **extensibilidade** (mais tipos de pizza, sem mudar o código principal)  
✔ Reduz **acoplamento** com classes concretas  
✔ Segue o princípio "Aberto/Fechado" do SOLID

---

## 📌 Conclusão

O padrão Factory Method ajuda a criar sistemas que são **mais flexíveis**, onde as subclasses têm o **controle da criação dos objetos**, mantendo o código **modular e reutilizável**.

> ✨ “Você pede uma pizza, a pizzaria decide o sabor.”
