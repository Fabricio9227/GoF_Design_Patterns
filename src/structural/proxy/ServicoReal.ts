import { Servico } from "./Servico";

export class ServicoReal implements Servico {
  executar(): void {
    console.log("Executando o serviço real.");
  }
}
