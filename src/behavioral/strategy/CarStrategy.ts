import { ITravelStrategy } from "./ITravelStrategy";

export class CarStrategy implements ITravelStrategy {
  private averageSpeedKmh = 80; // km/h

  public calculateTime(distance: number): number {
    return distance / this.averageSpeedKmh;
  }

  public getName(): string {
    return "Carro";
  }
}