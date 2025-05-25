# 🗺️ Padrão Strategy: Escolha Seu Caminho! (TypeScript)

Define uma família de algoritmos (as "estratégias"), encapsula cada um deles em classes separadas e os torna intercambiáveis. Isso permite que o algoritmo varie independentemente dos clientes que o utilizam.

---

## 📌 O que é o Strategy?

O padrão **Strategy** (ou Estratégia) permite que você defina um conjunto de algoritmos diferentes para uma tarefa específica e escolha qual deles usar em tempo de execução. É como ter várias "receitas" (estratégias) para o mesmo "prato" (tarefa), e você pode escolher a receita que preferir no momento.

### 🎯 Quando usar:

- Quando você tem várias variações de um algoritmo e quer que o cliente escolha qual usar.
- Para evitar muitos `if/else` ou `switch` que selecionam qual algoritmo executar.
- Quando você quer que os detalhes dos algoritmos fiquem isolados do código que os utiliza.
- Para permitir que novas estratégias sejam adicionadas facilmente sem alterar o "contexto" que as usa.

---

## 💡 Analogia simples: Escolher como Viajar 🚗🚌✈️

Imagine que você quer **planejar uma viagem** de uma cidade para outra:

- **Você (Contexto):** É quem decide como viajar e quer saber o tempo estimado.
- **Formas de Viajar (Estratégias):**
  - Ir de **Carro**: Tem uma velocidade média, considera paradas.
  - Ir de **Ônibus**: Tem outra velocidade média, horários fixos.
  - Ir de **Avião**: Rápido no ar, mas tem tempo de check-in, embarque, etc.

Você (o Contexto, ou `TravelPlanner`) escolhe uma estratégia de viagem. O `TravelPlanner` não precisa saber os detalhes de _como_ cada estratégia calcula o tempo, apenas que cada uma tem um método `calculateTime()`.

---

## ✨ Código de Exemplo (Resumo)

O `TravelPlanner` (Contexto) possui uma estratégia de viagem atual. Quando você pede para calcular o tempo de uma rota, ele delega essa tarefa para a estratégia que está configurada no momento.

**`TravelPlanner.ts` (O Planejador - trecho):**

```typescript
private currentStrategy: ITravelStrategy;

public setStrategy(strategy: ITravelStrategy): void {
  this.currentStrategy = strategy;
  console.log(`Estratégia de viagem definida para: ${strategy.getName()}`);
}

public calculateRouteTime(distance: number): number {
  if (!this.currentStrategy) {
    throw new Error("Nenhuma estratégia de viagem definida!");
  }
  return this.currentStrategy.calculateTime(distance);
}
```

---

## 🧠 Pontos Chave

✔ Flexibilidade: Permite trocar algoritmos (estratégias) em tempo de execução.  
✔ Evita Condicionais: Reduz a necessidade de if/else ou switch para selecionar variações de algoritmos.  
✔ Isolamento: Os detalhes de cada algoritmo ficam em sua própria classe (estratégia).  
✔ Aberto/Fechado: Fácil adicionar novas estratégias sem modificar o Contexto.

#### ⚠️ Muitos Objetos: Pode aumentar o número de objetos na aplicação, um para cada estratégia.

#### ⚠️ Comunicação: O Contexto pode precisar passar dados para a estratégia, o que pode tornar a interface da estratégia mais complexa se não for bem pensada.

## 📌 Conclusão

O padrão Strategy é como ter um canivete suíço de algoritmos: você escolhe a "lâmina" (estratégia) certa para o trabalho, mantendo o "cabo" (contexto) o mesmo. Isso torna seu código mais flexível e fácil de manter.

> ✨ "Vários caminhos, mesma jornada. Escolha o seu!"
