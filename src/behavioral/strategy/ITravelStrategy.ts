export interface ITravelStrategy {
  calculateTime(distance: number): number; // Retorna o tempo em horas
  getName(): string; // Para exibir qual estratégia está sendo usada
}
