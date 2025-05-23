import { Servico } from "./Servico";
import { ServicoReal } from "./ServicoReal";

export class ProxyDeSeguranca implements Servico {
  private servicoReal: ServicoReal;

  constructor(private usuario: string) {
    this.servicoReal = new ServicoReal();
  }

  executar(): void {
    if (this.usuario === "admin") {
      console.log("Acesso autorizado.");
      this.servicoReal.executar();
    } else {
      console.log("Acesso negado!");
    }
  }
}
