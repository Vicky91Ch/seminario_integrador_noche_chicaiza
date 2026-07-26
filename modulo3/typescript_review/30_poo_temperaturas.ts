
class Temperatura {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(celsius: number, fahrenheit: number) {
    this.valorCelsius = celsius;
    this.valorFahrenheit = fahrenheit;
  }


  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }


  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  aCelsius(): number{
    return (this.valorFahrenheit -32) * 1.8;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K = ` + 
      `${this.aCelsius()}°C`
    );
  }
}

const hervor = new Temperatura(100, 212);
const congelacion = new Temperatura(0, 32);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K
console.log(`Hervor: ${hervor.aFahrenheit()}°F, ${hervor.aKelvin()}K`);
console.log(`Congelación: ${congelacion.aFahrenheit()}°F, ${congelacion.aKelvin()}K`);
