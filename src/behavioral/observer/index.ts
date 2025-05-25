import { NewsChannel } from "./NewsChannel";
import { NewsSubscriber } from "./NewsSubscriber";

// 1. Criar o Sujeito (Canal de Notícias)
const techChannel = new NewsChannel("Tech News BR");

// 2. Criar os Observadores (Inscritos)
const ana = new NewsSubscriber("Ana");
const bruno = new NewsSubscriber("Bruno");
const carla = new NewsSubscriber("Carla");

console.log(""); // Espaçamento

// 3. Inscrever observadores no sujeito
techChannel.subscribe(ana);
techChannel.subscribe(bruno);

console.log(""); // Espaçamento

// 4. Publicar uma notícia (o sujeito notifica os observadores)
techChannel.publishNews("TypeScript 5.5 Lançado!");

console.log(""); // Espaçamento

// 5. Um observador cancela a inscrição, outro se inscreve
techChannel.unsubscribe(bruno);
techChannel.subscribe(carla);

console.log(""); // Espaçamento

// 6. Publicar outra notícia
techChannel.publishNews("IA Revoluciona Desenvolvimento!");
