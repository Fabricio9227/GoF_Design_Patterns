import { BaseApprover } from "./BaseApprover";

export class ManagerApprover extends BaseApprover {
  constructor() {
    // Gerente aprova até R$500
    super("Gerente", 500);
  }
  // A lógica de tryApprove já está na BaseApprover e usa o approvalLimit.
  // Se precisasse de lógica mais específica, poderia sobrescrever tryApprove.
}
