# 🗣️ Padrão Mediator: Conversa Simples (TypeScript)

Um jeito fácil de objetos conversarem sem se conhecerem diretamente, usando um "mensageiro" central.

---

## 📌 O que é o Mediator?

O **Mediator** (ou Mediador) ajuda objetos (chamados Colegas) a não dependerem uns dos outros diretamente. Eles falam com um "mensageiro" (o Mediator), e este se encarrega de repassar as informações para quem precisa.

### 🎯 Quando usar:

- Quando muitos objetos se falam o tempo todo, criando uma teia de conexões confusa.
- Para simplificar essa conversa, centralizando a lógica de comunicação.

---

## 💡 Analogia simples: Grupo de WhatsApp 📱💬

Imagine um **grupo de WhatsApp**:

- **Você e seus amigos** são os **Colegas**.
- O **grupo de WhatsApp em si** é o **Mediator**.

Você envia uma mensagem para o grupo (Mediator). O grupo, então, entrega essa mensagem para todos os outros participantes. Você não precisa enviar a mensagem individualmente para cada amigo. O grupo faz essa "mediação".

---

## 📁 Estrutura do código (Exemplo: Chat Simples)

---

## ✨ Código de Exemplo (Resumo)

No nosso chat, o `ChatRoom` (Mediator) recebe mensagens dos `User` (Colegas) e as distribui para os outros usuários no chat.

**`ChatRoom.ts` (O Grupo de Chat - trecho):**

```typescript
// Dentro do método de enviar mensagem no ChatRoom:
this.users.forEach((user) => {
  if (user !== sender) {
    // Não envia de volta para quem mandou
    user.receive(message, sender.name);
  }
});
```

## 🧠 Pontos Chave

✔ Menos "fofoca": Objetos não precisam se conhecer diretamente.  
✔ Conversa Organizada: O Mediator centraliza a comunicação.  
✔ Mais Flexível: Fácil adicionar ou remover objetos da conversa sem quebrar tudo.

### ⚠️ Mediador Sabichão: O Mediator pode acabar sabendo e fazendo coisas demais se não tomar cuidado.

## 📌 Conclusão

O Mediator é como um bom organizador de festas: ele garante que as pessoas certas conversem, sem que todo mundo precise gritar com todo mundo. Ele simplifica a comunicação!

> ✨ "Menos conversas diretas, mais organização."
