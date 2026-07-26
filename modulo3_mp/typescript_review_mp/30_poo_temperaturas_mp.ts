// POO - Conversiones de Motos
class ConversionMoto {
  precioDolares: number;
  precioSoles: number;

  constructor(dolares: number, soles: number) {
    this.precioDolares = dolares;
    this.precioSoles = soles;
  }

  aSoles(): number {
    return this.precioDolares * 3.80;
  }

  aEuros(): number {
    return this.precioDolares * 0.92;
  }

  aDolares(): number {
    return this.precioSoles / 3.80;
  }

  describir(): string {
    return (
      `$${this.precioDolares}USD = ` +
      `$${this.aSoles()}PEN = ` +
      `€${this.aEuros().toFixed(2)}EUR = ` +
      `$${this.aDolares().toFixed(2)}USD`
    );
  }
}

const motoNueva = new ConversionMoto(4500, 17100);
const motoUsada = new ConversionMoto(2500, 9500);

console.log(motoNueva.describir());     // $4500USD = $17100PEN = €4140.00EUR = $4500.00USD
console.log(motoUsada.describir());     // $2500USD = $9500PEN = €2300.00EUR = $2500.00USD
console.log(`Nueva en soles: ${motoNueva.aSoles()}PEN`);
console.log(`Usada en euros: €${motoUsada.aEuros().toFixed(2)}`);
