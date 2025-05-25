import { IApprover } from "./IApprover";

export abstract class BaseApprover implements IApprover {
  protected nextApprover: IApprover | null = null;
  protected approverName: string;
  protected approvalLimit: number;

  constructor(name: string, limit: number) {
    this.approverName = name;
    this.approvalLimit = limit;
  }

  public setNext(approver: IApprover): IApprover {
    this.nextApprover = approver;
    return approver; // Permite encadear: manager.setNext(director).setNext(ceo);
  }

  public tryApprove(amount: number): void {
    if (amount <= this.approvalLimit) {
      console.log(`  ${this.approverName} aprovou R$${amount}.`);
    } else if (this.nextApprover) {
      console.log(
        `  ${this.approverName}: Não posso aprovar R$${amount}. Passando adiante...`
      );
      this.nextApprover.tryApprove(amount);
    } else {
      console.log(
        `  ${this.approverName}: Não posso aprovar R$${amount}. Despesa de R$${amount} não aprovada.`
      );
    }
  }
}
