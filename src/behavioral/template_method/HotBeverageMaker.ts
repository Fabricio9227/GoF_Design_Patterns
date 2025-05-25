export abstract class HotBeverageMaker {
  // Este é o Template Method. Ele define o esqueleto do algoritmo.
  // Não pode ser sobrescrito pelas subclasses (em TypeScript, isso é uma convenção,
  // já que não há 'final' para métodos como em Java/C#).
  public prepareBeverage(): void {
    this.boilWater();
    this.brew(); // Este é um passo que varia
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      // Isto é um "hook"
      this.addCondiments(); // Este também varia
    }
    this.finalizeBeverage();
  }

  // Métodos abstratos que DEVEM ser implementados pelas subclasses
  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  // Métodos concretos (parte do esqueleto, comum a todas as bebidas)
  private boilWater(): void {
    console.log("Fervendo água...");
  }

  private pourInCup(): void {
    console.log("Despejando na xícara...");
  }

  private finalizeBeverage(): void {
    // Este método poderia ser sobrescrito se não fosse private
    // e se não fizesse parte essencial do template inalterável.
    // Para o exemplo, vamos mantê-lo simples.
  }

  // Um "hook". As subclasses podem sobrescrevê-lo, mas não são obrigadas.
  // Fornece um comportamento padrão.
  protected customerWantsCondiments(): boolean {
    console.log("Cliente quer condimentos!"); // Comportamento padrão
    return true;
  }
}
