import { ILightState } from "./ILightState";
import { LightSwitch } from "./LightSwitch";
import { OffState } from "./OffState"; // Precisa conhecer o próximo estado

export class OnState implements ILightState {
  public handlePress(context: LightSwitch): void {
    console.log("  Desligando a luz!");
    // Muda o estado do interruptor para "Desligado"
    context.setState(new OffState());
  }

  public getName(): string {
    return "LIGADO";
  }
}
