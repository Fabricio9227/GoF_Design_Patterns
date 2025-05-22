# 🧰 Padrão de Projeto: Abstract Factory (TypeScript)

Este projeto demonstra o uso do **padrão de criação Abstract Factory**, através de um exemplo de **temas de interface gráfica** (claro e escuro) com componentes como botões e caixas de texto.

---

## 📌 O que é o Abstract Factory?

O **Abstract Factory** é um padrão de projeto do tipo **creacional** (de criação) que permite criar **famílias de objetos relacionados** sem depender de suas **classes concretas**.

### 🎯 Quando usar:

- Quando você precisa garantir que objetos criados **pertencem ao mesmo tema, estilo ou família**.
- Quando precisa criar **grupos de objetos** que devem funcionar juntos.

---

## 💡 Analogia simples

Imagine que você tem dois **temas de interface**: claro e escuro.  
Cada tema precisa criar seu **botão** e **caixa de texto** no mesmo estilo.  
Com Abstract Factory, você escolhe o tema e a fábrica cuida de entregar todos os componentes combinando.

---

## 📁 Estrutura do código

```
.
├── interfaces/
│   ├── Botao.ts
│   ├── CaixaDeTexto.ts
│   └── UIFactory.ts
├── temaClaro/
│   ├── BotaoClaro.ts
│   ├── CaixaDeTextoClaro.ts
│   └── TemaClaroFactory.ts
├── temaEscuro/
│   ├── BotaoEscuro.ts
│   ├── CaixaDeTextoEscuro.ts
│   └── TemaEscuroFactory.ts
└── index.ts
```

---

## ✅ Saída esperada

```
Botão ESCURO renderizado
Caixa de texto ESCURA renderizada
```

---

## 🧠 Benefícios do Abstract Factory

✔ Criação **consistente** de objetos relacionados  
✔ **Fácil de trocar famílias** de objetos em tempo de execução  
✔ Garante que os componentes **combinem entre si**  
✔ Reduz **acoplamento com classes concretas**

---

## 📌 Conclusão

O padrão Abstract Factory é ideal quando você precisa criar **objetos que pertencem a uma mesma família** de forma consistente e desacoplada.
