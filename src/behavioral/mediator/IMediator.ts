import { User } from "./User"; // Dependência será resolvida com os arquivos

export interface IMediator {
  registerUser(user: User): void;
  sendMessage(message: string, sender: User): void;
}
