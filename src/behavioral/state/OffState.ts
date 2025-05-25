import { ILightState } from "./ILightState";
import { LightSwitch } from "./LightSwitch";
import { OnState } from "./OnState"; // Precisa conhecer o próximo estado

export class OffState implements ILightState {
  public handlePress(context: LightSwitch): void {
    console.log("  Ligando a luz!");
    // Muda o estado do interruptor para "Ligado"
    context.setState(new OnState());
  }

  public getName(): string {
    return "DESLIGADO";
  }
}
