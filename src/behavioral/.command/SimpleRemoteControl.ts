import { ICommand } from "./ICommand";

// Um Invocador simples que tem apenas um "slot" para um comando.
export class SimpleRemoteControl {
  private slot: ICommand | null = null;

  public setCommand(command: ICommand): void {
    this.slot = command;
  }

  public pressButton(): void {
    console.log("Botão pressionado!");
    if (this.slot) {
      this.slot.execute();
    } else {
      console.log("  Nenhum comando configurado para este botão.");
    }
  }
}
