import { ILightState } from "./ILightState";
import { OffState } from "./OffState"; // Estado inicial

export class LightSwitch {
  private currentState: ILightState;

  constructor() {
    // O interruptor começa no estado "Desligado"
    this.currentState = new OffState();
    console.log(
      `O interruptor está inicialmente ${this.currentState.getName()}.`
    );
  }

  // Método para mudar o estado
  public setState(newState: ILightState): void {
    this.currentState = newState;
    console.log(`O interruptor agora está ${this.currentState.getName()}.`);
  }

  // A ação que o usuário pode fazer
  public press(): void {
    console.log("Pressionando o interruptor...");
    // A ação é delegada ao estado atual
    this.currentState.handlePress(this);
  }
}
