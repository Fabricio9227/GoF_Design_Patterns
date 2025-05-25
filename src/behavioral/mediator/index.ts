import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

// 1. Criar o Mediator (Sala de Chat)
const chatRoom = new ChatRoom();

// 2. Criar os Usuários (Colegas), que se registram automaticamente no ChatRoom
const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const carlos = new User("Carlos", chatRoom);

// 3. Simular conversas
alice.send("Olá a todos!");

console.log(""); // Apenas para pular uma linha na saída

bob.send("Oi Alice e Carlos!");

console.log("");

carlos.send("Boa noite a todos!");
