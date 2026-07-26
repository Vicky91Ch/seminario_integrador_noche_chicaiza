// Concepto puro - Interfaces para sistema de Motos
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class VentaMoto implements Serializable, Validable {
  constructor(
    public id: string,
    public modelo: string,
    public cliente: string,
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, modelo: this.modelo, cliente: this.cliente, total: this.total });
  }

  esValido(): boolean {
    return this.modelo.length > 0 && this.cliente.length > 0 && this.total > 0;
  }
}

const venta = new VentaMoto("V-001", "Yamaha R15", "Juan Pérez", 4500);
console.log(venta.esValido());    // true
console.log(venta.serializar());
// {"id":"V-001","modelo":"Yamaha R15","cliente":"Juan Pérez","total":4500}
