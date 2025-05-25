import { ExecutionContext } from "./ExecutionContext";

export interface IExpression {
  interpret(context: ExecutionContext): void;
}
