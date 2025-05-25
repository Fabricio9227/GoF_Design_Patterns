import { IMediator } from "./IMediator";
import { User } from "./User";

export class ChatRoom implements IMediator {
  private users: User[] = [];

  registerUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    this.users.forEach((user) => {
      // O usuário não recebe a própria mensagem de volta pela sala
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}
