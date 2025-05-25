# 📝 Padrão Template Method: Receita Fixa, Sabor Variado (TypeScript)

Define um "esqueleto" de como fazer algo, deixando as classes filhas preencherem os detalhes de alguns passos, sem mudar a receita principal.

---

## 📌 O que é o Template Method?

O **Template Method** (ou Método Modelo) é como uma receita de bolo com passos fixos (o "template"). As classes filhas podem mudar o "recheio" ou o "tempero" de alguns desses passos, mas a ordem e os passos principais da receita são sempre os mesmos, definidos na classe mãe.

### 🎯 Quando usar:

- Quando você tem vários algoritmos que são parecidos, com pequenas diferenças.
- Para evitar código duplicado, colocando as partes comuns na classe mãe.
- Para permitir que classes filhas personalizem apenas partes específicas de um processo.

---

## 💡 Analogia simples: Preparar Bebida Quente ☕🍵

Imagine fazer uma **bebida quente**, como chá ou café:

1.  **Ferver água** (passo fixo).
2.  **Adicionar o ingrediente principal** (variável: pó de café ou sachê de chá).
3.  **Colocar na xícara** (passo fixo).
4.  **Adicionar extras, se quiser** (variável/opcional: açúcar, leite, limão).

A "receita" principal (Template Method) é a mesma. O que muda é o ingrediente e os extras, definidos por quem está fazendo o café ou o chá (as classes filhas).

---

## ✨ Código de Exemplo (Resumo)

A classe base `HotBeverageMaker` tem o método principal `prepareBeverage()`. Este método chama outros métodos, alguns que são fixos e outros que são "abstratos" (devem ser preenchidos pelas classes filhas, como `brew()`).

**`HotBeverageMaker.ts` (A "receita" base - trecho):**

```typescript
public prepareBeverage(): void {
  this.boilWater(); // Passo fixo
  this.brew();      // Passo que a filha define (ex: passar café ou infundir chá)
  this.pourInCup(); // Passo fixo
  if (this.customerWantsCondiments()) { // Passo opcional (hook)
    this.addCondiments(); // Passo que a filha define (ex: adicionar açúcar/leite ou limão)
  }
}
```

## 🧠 Pontos Chave

✔ Evita Repetição: Código comum fica na classe mãe.  
✔ Estrutura Definida: O fluxo principal do algoritmo é fixo.  
✔ Personalização: Classes filhas focam só no que é diferente.  
✔ Hook Points: Permite "ganchos" opcionais que as filhas podem ou não usar.

#### ⚠️ Limitação: A estrutura do algoritmo é fixa; só os "recheios" mudam.

## 📌 Conclusão

O Template Method oferece uma estrutura (o "template"), e as classes filhas preenchem as lacunas. É ótimo para quando o "como fazer" geral é o mesmo, mas os detalhes variam.

> ✨ "A mesma fôrma, bolos diferentes."
