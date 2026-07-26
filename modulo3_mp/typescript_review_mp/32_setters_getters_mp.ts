// Concepto puro - Clase Moto con Getters y Setters
class MotoGestor {
  private _precio: number;
  _kilometraje: number | undefined;

  constructor(precio: number) {
    this._precio = precio;
    this._kilometraje = 0;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(valor: number) {
    if (valor <= 0) throw new Error("El precio debe ser positivo");
    this._precio = valor;
  }

  get cuotas(): number {
    return Math.round(this._precio / 12);
  }
}

const moto = new MotoGestor(4500);
console.log(moto.precio);          // 4500   ← usa el getter
console.log(`Cuotas: $${moto.cuotas}`); // Cuotas: $375

moto.precio = 5000;                // usa el setter
console.log(`Nuevo precio: $${moto.precio}`);
console.log(`Nuevas cuotas: $${moto.cuotas}`);

moto._kilometraje = 15000;
console.log(`Kilometraje: ${moto._kilometraje}km`);

// moto.precio = -3;  // Error: El precio debe ser positivo
