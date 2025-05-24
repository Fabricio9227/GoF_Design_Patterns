# 👤 Padrão de Projeto: Singleton (TypeScript)

Este projeto demonstra o uso do **padrão de criação Singleton**, com um exemplo simples de uma classe `Logger` que registra mensagens e só pode ter **uma única instância** durante a execução.

---

## 📌 O que é o Singleton?

O **Singleton** é um padrão de projeto do tipo **creacional** (de criação) que garante que **exista apenas uma instância** de uma determinada classe, e fornece um **acesso global** a ela.

### 🎯 Quando usar:

- Quando precisa **controlar o acesso a um recurso único** (ex: log, banco de dados, configuração global).
- Quando **não faz sentido ter mais de uma instância** da classe no sistema.

---

## 💡 Analogia simples

Imagine que existe **um único diretor** em uma escola.  
Se várias pessoas tentarem "criar um diretor", o sistema deve **devolver sempre o mesmo**.

---

## 📁 Estrutura do código

```
.
├── Singleton.ts     # Classe Singleton com método getInstance()
└── index.ts      # Código de uso/teste
```

---

## 🧩 Explicação dos Arquivos

### `Singleton.ts`

```ts
export class Logger {
  private static instancia: Logger;

  private constructor() {
    console.log("Logger criado!");
  }

  static getInstance(): Logger {
    if (!Logger.instancia) {
      Logger.instancia = new Logger();
    }
    return Logger.instancia;
  }

  log(mensagem: string): void {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] ${mensagem}`);
  }
}
```

- O **construtor é privado**, então ninguém pode dar `new Logger()` fora da classe.
- O método `getInstance()` cria a instância se ela ainda não existe e sempre retorna a mesma.

---

### `index.ts`

```ts
import { Logger } from "./Logger";

const log1 = Logger.getInstance();
log1.log("Primeira mensagem");

const log2 = Logger.getInstance();
log2.log("Segunda mensagem");

console.log(log1 === log2); // true
```

---

## ✅ Saída esperada

```
Logger criado!
[2025-05-21T13:15:00.000Z] Primeira mensagem
[2025-05-21T13:15:01.000Z] Segunda mensagem
true
```

---

## 🧠 Benefícios do Singleton

✔ Garante que existe **apenas uma instância**  
✔ **Evita conflitos** e dados duplicados  
✔ Fornece um **ponto de acesso global**  
✔ Ideal para **logs, configs, cache, banco de dados**
