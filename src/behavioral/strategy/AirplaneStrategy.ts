import { ITravelStrategy } from "./ITravelStrategy";

export class AirplaneStrategy implements ITravelStrategy {
  private averageFlightSpeedKmh = 800; // km/h
  private fixedTimeHours = 2; // Tempo para check-in, segurança, embarque, táxi, etc.

  public calculateTime(distance: number): number {
    const flightTime = distance / this.averageFlightSpeedKmh;
    return flightTime + this.fixedTimeHours;
  }

  public getName(): string {
    return "Avião";
  }
}
