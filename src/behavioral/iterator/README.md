# 📜 Padrão de Projeto Comportamental: Iterator (TypeScript)

Este `README.md` demonstra o uso do padrão de projeto comportamental **Iterator**, usando TypeScript, através de um exemplo simples de uma coleção de palavras que pode ser percorrida sem expor sua estrutura interna.

---

## 📌 O que é o Iterator?

O padrão **Iterator** fornece uma maneira de acessar os elementos de um objeto agregado (como uma lista ou coleção) sequencialmente, sem expor sua representação interna. Ele transfere a responsabilidade de percorrer e acessar os elementos de uma coleção para um objeto separado, o iterador.

### 🎯 Quando usar:

- Quando você precisa de uma forma uniforme para percorrer diferentes estruturas de coleções.
- Para simplificar a interface de uma coleção complexa, escondendo os detalhes da iteração do cliente.
- Quando você quer permitir múltiplas travessias simultâneas sobre a mesma coleção ou diferentes algoritmos de travessia.
- Para desacoplar os algoritmos de travessia da estrutura de dados da coleção.

---

## 💡 Analogia simples

Imagine uma **lista de compras** e seu **dedo** 🖐️🛒.

- A **lista de compras** é a sua **coleção de itens**.
- Seu **dedo** é o **Iterador**. Ele aponta para um item por vez.
- Com o dedo, você pode ver o **item atual**, ir para o **próximo item** e verificar se **ainda há itens** na lista.
- Você não precisa saber como a lista foi escrita (papel, app, etc.) para usar o dedo para percorrê-la. O "como" é abstraído.

---

## 📁 Estrutura do código (Exemplo: Coleção de Palavras)

```
├── IIterator.ts         # Interface do Iterator (define como percorrer)
├── IAggregate.ts        # Interface do Aggregate (define como obter um iterador)
├── WordCollection.ts    # ConcreteAggregate (nossa coleção de palavras)
├── WordIterator.ts      # ConcreteIterator (o iterador específico para WordCollection)
└── main.ts              # Cliente que usa o iterador para percorrer a coleção
```

---

## 🧠 Benefícios e Considerações do Iterator

✔ Desacoplamento Forte: O cliente não conhece a estrutura interna da coleção.  
✔ Interface Uniforme: Permite tratar diferentes coleções da mesma forma (se todas fornecerem um iterador).  
✔ Variações de Travessia: Fácil adicionar novos tipos de iteradores (ex: reverso, com filtro) sem mudar a coleção.  
✔ Travessias Múltiplas: Vários iteradores podem percorrer a mesma coleção independentemente.

---

# ⚠️ Simplicidade vs. Padrão: Para coleções muito simples e com uma única forma de travessia, o padrão pode introduzir uma complexidade desnecessária.

## 📌 Conclusão

O padrão Iterator é uma ferramenta poderosa para abstrair a forma como você percorre coleções, tornando seu código mais flexível, extensível e fácil de manter, especialmente quando lidando com diversas ou complexas estruturas de dados.

> ✨ "Dê-me uma forma de começar e uma forma de ir para o próximo, e eu percorrerei qualquer universo de dados."
