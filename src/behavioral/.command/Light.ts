export class Light {
  private location: string;

  constructor(location: string = "Sala de Estar") {
    this.location = location;
  }

  public turnOn(): void {
    console.log(`  A luz da ${this.location} foi ACESA.`);
  }

  public turnOff(): void {
    console.log(`  A luz da ${this.location} foi APAGADA.`);
  }
}
