export class ExecutionContext {
  public value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
    console.log(`Contexto inicial: { "value": ${this.value} }`);
  }
}
