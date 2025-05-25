import { ITravelStrategy } from "./ITravelStrategy";

export class TravelPlanner {
  private currentStrategy: ITravelStrategy | null = null;

  public setStrategy(strategy: ITravelStrategy): void {
    this.currentStrategy = strategy;
    console.log(`Estratégia de viagem definida para: ${strategy.getName()}`);
  }

  public calculateRouteTime(distance: number): number | string {
    if (!this.currentStrategy) {
      // Em um app real, poderia lançar um erro ou ter uma estratégia padrão
      return "Nenhuma estratégia de viagem definida!";
    }
    const time = this.currentStrategy.calculateTime(distance);
    console.log(
      `  Tempo estimado de viagem (${this.currentStrategy.getName()}) para ${distance}km: ${time.toFixed(2)} horas.`
    );
    return time;
  }
}
