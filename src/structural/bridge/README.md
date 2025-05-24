# 🌉 Padrão de Projeto: Bridge (TypeScript)

O padrão **Bridge** é usado para **separar a abstração da implementação**, permitindo que elas evoluam de forma independente.

---

## 📌 O que é o Bridge?

Bridge é um padrão **estrutural** que divide a lógica de uma classe em **duas hierarquias separadas** — a **abstração** e a **implementação** —, ligadas por uma ponte (bridge).

### 🎯 Quando usar:

- Quando você quer **evitar herança excessiva**.
- Quando diferentes **interfaces e implementações** precisam variar separadamente.

---

## 💡 Analogia simples

Imagine um **controle remoto universal**. Ele pode controlar diferentes marcas de TVs. A interface do controle é a mesma (volume, canal), mas a implementação muda conforme a TV.

## 🧠 Benefícios do Bridge

✔ Evita explosão de subclasses  
✔ Permite mudar a implementação em tempo de execução  
✔ Separa abstração da implementação  

---

## 📌 Conclusão

Bridge permite **independência entre abstração e implementação**, facilitando manutenção e extensão do código.

> ✨ “Conecte dois mundos diferentes com uma ponte.”
