// Concepto puro - Clases abstractas para Motos
abstract class VehiculoBase {
  abstract encender(): string;       // sin implementación — las subclases DEBEN implementarlo
  abstract apagar(): string;

  // Los métodos concretos SÍ tienen implementación
  describir(): string {
    return (
      `Encender: ${this.encender()} | ` +
      `Apagar: ${this.apagar()}`
    );
  }
}

class MotoDeportiva extends VehiculoBase {
  constructor(private marca: string) {
    super();
  }

  override encender(): string {
    return `${this.marca} deportiva enciende: Vroom!`;
  }

  override apagar(): string {
    return `${this.marca} deportiva apaga: silencio`;
  }
}

class MotoScooter extends VehiculoBase {
  constructor(private marca: string) {
    super();
  }

  override encender(): string {
    return `${this.marca} scooter enciende: brrr`;
  }

  override apagar(): string {
    return `${this.marca} scooter apaga: click`;
  }
}

// const v = new VehiculoBase(); // Error: Cannot create an instance of an abstract class.

const deportiva = new MotoDeportiva("Yamaha");
const scooter = new MotoScooter("Honda");

console.log(deportiva.describir()); // Encender: Yamaha deportiva enciende: Vroom! | Apagar: Yamaha deportiva apaga: silencio
console.log(scooter.describir());   // Encender: Honda scooter enciende: brrr | Apagar: Honda scooter apaga: click
