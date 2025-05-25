import { LightSwitch } from "./LightSwitch"; // Dependência de importação cíclica resolvida em tempo de execução

export interface ILightState {
  handlePress(context: LightSwitch): void;
  getName(): string; // Para ajudar a exibir o estado atual
}
