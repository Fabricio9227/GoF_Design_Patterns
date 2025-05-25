# 🩺 Padrão Visitor: Adicionando Superpoderes Externos (TypeScript)

Permite adicionar novas operações a um conjunto de classes (Elementos) sem precisar modificar essas classes. É como um "especialista" (Visitor) que sabe como realizar tarefas diferentes em cada tipo de Elemento.

---

## 📌 O que é o Visitor?

O padrão **Visitor** (ou Visitante) permite que você defina uma nova operação para uma hierarquia de objetos sem alterar as classes desses objetos. A ideia é ter um objeto "visitante" que implementa a operação e "visita" cada elemento da hierarquia. O elemento, por sua vez, "aceita" o visitante e o direciona para o método correto do visitante que sabe como lidar com aquele tipo específico de elemento.

### 🎯 Quando usar:

- Quando você precisa realizar operações distintas sobre objetos de uma estrutura complexa sem "poluir" suas classes com essas operações.
- Para adicionar novas operações facilmente a uma hierarquia de classes estável (que não muda frequentemente).
- Quando as operações precisam acessar dados diferentes dos elementos, dependendo do tipo concreto do elemento.

---

## 💡 Analogia simples: Veterinário na Fazenda 👨‍⚕️🐕🐈🐒

Imagine um **Veterinário (Visitor)** que visita diferentes **Animais (Elementos)** em uma fazenda:

- **Animais (Elementos):** Cachorro, Gato, Macaco. Cada um é um tipo diferente.
- **Veterinário (Visitor):** Ele pode ter diferentes "especialidades" ou "tarefas" (operações), como:
  - `ExaminarSaudeVisitor`: Checa a saúde de cada animal de forma específica.
  - `AlimentarVisitor`: Dá a comida apropriada para cada animal.

Quando o Veterinário (ex: `ExaminarSaudeVisitor`) visita um `Cachorro`, o cachorro "aceita" o veterinário e diz: "Eu sou um Cachorro, faça seu exame de cachorro em mim". O veterinário então executa o exame específico para cães. O mesmo acontece para Gatos e Macacos. A tarefa geral (examinar saúde) é a mesma, mas a execução é adaptada a cada tipo de animal.

---

## ✨ Código de Exemplo (Resumo)

Cada `IAnimal` (Elemento) tem um método `accept(visitor: IVisitor)`. Dentro deste método, o animal chama o método apropriado no `visitor`, passando a si mesmo como argumento (ex: `visitor.visitDog(this)`). O `IVisitor` tem um método `visit<NomeDoAnimal>()` para cada tipo de animal.

**`Dog.ts` (Elemento Concreto - trecho):**

```typescript
public accept(visitor: IVisitor): void {
  // Isso é parte da "dupla expedição":
  // 1. Chamada para accept(visitor)
  // 2. Chamada para visitor.visitDog(this)
  visitor.visitDog(this);
}
```

---

## 🧠 Pontos Chave

✔ Novas Operações Facilmente: Adicionar uma nova operação (ex: "VacinarVisitor") significa criar uma nova classe Visitor, sem mudar as classes dos Animais.  
✔ Lógica Agrupada: A lógica para uma operação em diferentes tipos de animais fica agrupada na classe Visitor correspondente.  
✔ Separação de Interesses: As classes dos Animais não ficam "inchadas" com muitas operações diferentes.

#### ⚠️ Difícil Adicionar Novos Elementos: Se você adicionar um novo tipo de IAnimal (ex: Lion.ts), a interface IVisitor e TODAS as classes ConcreteVisitor precisam ser atualizadas com um novo método visitLion(). Este é o principal "trade-off".

#### ⚠️ Encapsulamento: O Visitor pode precisar acessar membros públicos dos Elementos para realizar seu trabalho, o que pode quebrar um pouco o encapsulamento se esses membros não fossem para ser públicos.

## 📌 Conclusão

O padrão Visitor é uma solução poderosa (embora um pouco mais complexa de início) para adicionar novas funcionalidades a uma hierarquia de classes existente sem ter que alterá-las. Ele brilha quando as classes dos elementos são estáveis, mas as operações sobre elas mudam ou aumentam com frequência.

> ✨ "Novas tarefas para velhos objetos, sem mexer neles!"
