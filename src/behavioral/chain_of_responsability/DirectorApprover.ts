import { BaseApprover } from "./BaseApprover";

export class DirectorApprover extends BaseApprover {
  constructor() {
    // Diretor aprova até R$5000
    super("Diretor", 5000);
  }
}
