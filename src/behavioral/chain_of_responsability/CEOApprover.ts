import { BaseApprover } from "./BaseApprover";

export class CEOApprover extends BaseApprover {
  constructor() {
    // CEO aprova até R$10000
    super("CEO", 10000);
  }
}
