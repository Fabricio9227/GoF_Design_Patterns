export interface IApprover {
  setNext(approver: IApprover): IApprover; // Para configurar o próximo na cadeia
  tryApprove(amount: number): void; // Tenta aprovar ou passa adiante
}
