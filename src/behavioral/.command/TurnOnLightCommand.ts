import { ICommand } from "./ICommand";
import { Light } from "./Light";

export class TurnOnLightCommand implements ICommand {
  private light: Light; // O Receptor

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.turnOn();
  }

  // public undo(): void {
  //   this.light.turnOff();
  // }
}
