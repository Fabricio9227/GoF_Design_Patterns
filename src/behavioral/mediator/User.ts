import { IMediator } from "./IMediator";

export class User {
  public name: string;
  private mediator: IMediator;

  constructor(name: string, mediator: IMediator) {
    this.name = name;
    this.mediator = mediator;
    this.mediator.registerUser(this); // Se registra no mediador ao ser criado
  }

  send(message: string): void {
    console.log(`[Sala de Chat] ${this.name} enviou a mensagem: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, senderName: string): void {
    console.log(`  ${this.name} recebeu de ${senderName}: ${message}`);
  }
}
