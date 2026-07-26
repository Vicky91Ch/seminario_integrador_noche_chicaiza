// Concepto puro - Clase Moto
class Moto {
  marca: string;
  modelo: string;
  precio: number;
  enStock: boolean;

  constructor(marca: string, modelo: string, precio: number, enStock: boolean) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.enStock = enStock;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.marca} ${this.modelo} — $${this.precio} (${estado})`;
  }
}

const moto1 = new Moto("Yamaha", "R15", 4500, true);
const moto2 = new Moto("Honda", "CB 500", 6500, false);

console.log(moto1.describir()); // Yamaha R15 — $4500 (disponible)
console.log(moto2.describir()); // Honda CB 500 — $6500 (agotado)
