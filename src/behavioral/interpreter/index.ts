import { DecrementExpression } from "./DecrementExpression";
import { ExecutionContext } from "./ExecutionContext";
import { IExpression } from "./IExpression";
import { IncrementExpression } from "./IncrementExpression";

function runInterpreter(commandString: string, initialValue: number = 0) {
  console.log(
    `Processando comando: ${commandString} com valor inicial: ${initialValue}`
  );
  const context = new ExecutionContext(initialValue);
  const expressions: IExpression[] = [];

  // Isso é um parser/lexer muito simples
  for (const char of commandString) {
    if (char === "+") {
      expressions.push(new IncrementExpression());
    } else if (char === "-") {
      expressions.push(new DecrementExpression());
    }
    // Ignora outros caracteres para este exemplo simples
  }

  // Executa as expressões
  for (const expression of expressions) {
    expression.interpret(context);
  }

  console.log(`Resultado Final: ${context.value}\n`);
}

// Testando o interpretador
runInterpreter("++-+"); // Começa com 0 por padrão
runInterpreter("--+-++", 5);
