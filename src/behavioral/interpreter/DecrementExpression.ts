import { ExecutionContext } from "./ExecutionContext";
import { IExpression } from "./IExpression";

export class DecrementExpression implements IExpression {
  public interpret(context: ExecutionContext): void {
    context.value--;
    console.log(`  Interpretando '-': Valor atual = ${context.value}`);
  }
}
