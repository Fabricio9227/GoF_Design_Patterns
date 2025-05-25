import { Light } from "./Light";
import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { TurnOffLightCommand } from "./TurnOffLightCommand";
import { TurnOnLightCommand } from "./TurnOnLightCommand";

// O Cliente

// 1. Criar o Receptor (o objeto que fará a ação)
const livingRoomLight = new Light("Sala de Estar");

// 2. Criar os Comandos concretos, associando-os ao Receptor
const lightOn = new TurnOnLightCommand(livingRoomLight);
const lightOff = new TurnOffLightCommand(livingRoomLight);

// 3. Criar o Invocador (o controle remoto)
const remote = new SimpleRemoteControl();

// 4. Configurar o comando no invocador e pressionar o botão
console.log("Configurando o controle remoto para LIGAR a luz.");
remote.setCommand(lightOn);
remote.pressButton();

console.log("\nConfigurando o controle remoto para DESLIGAR a luz.");
remote.setCommand(lightOff);
remote.pressButton();

console.log("\nConfigurando o controle remoto para LIGAR a luz novamente.");
remote.setCommand(lightOn); // Reutilizando o comando
remote.pressButton();
