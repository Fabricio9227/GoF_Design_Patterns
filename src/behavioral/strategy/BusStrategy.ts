import { ITravelStrategy } from "./ITravelStrategy";

export class BusStrategy implements ITravelStrategy {
  private averageSpeedKmh = 60; // km/h (considerando paradas)

  public calculateTime(distance: number): number {
    return distance / this.averageSpeedKmh;
  }

  public getName(): string {
    return "Ônibus";
  }
}
