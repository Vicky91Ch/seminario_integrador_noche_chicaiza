// Concepto puro - Jerarquía de Vehículos
class Vehiculo {
  constructor(public marca: string) {}

  arrancar(): string {
    return `${this.marca} está arrancando.`;
  }
}

class Motos extends Vehiculo {
  constructor(marca: string, public tipo: string) {
    super(marca); // llama al constructor del padre
  }

  // override sobrescribe el método del padre
  override arrancar(): string {
    return `${this.marca} ${this.tipo} arranca con un brum!`;
  }

  acelerar(distancia: number): string {
    return `${this.marca} acelera ${distancia} metros.`;
  }
}

const v = new Vehiculo("Genérico");
const m = new Motos("Yamaha", "deportiva");

console.log(v.arrancar());         // Genérico está arrancando.
console.log(m.arrancar());         // Yamaha deportiva arranca con un brum!
console.log(m.acelerar(100));      // Yamaha acelera 100 metros.
console.log(m.tipo);               // deportiva


class Trabajador {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class Gerente extends Trabajador {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Vendedor extends Trabajador {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private ventasMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

const emp = new Trabajador("Carlos", 2000);
const ger = new Gerente("Laura", 3000, 1500);
const vend = new Vendedor("Pedro", 1500, 50, 30);

console.log(emp.infoLaboral());  // Carlos — Salario: $2000
console.log(ger.infoLaboral());  // Laura — Salario: $4500
console.log(vend.infoLaboral()); // Pedro — Salario: $3000
