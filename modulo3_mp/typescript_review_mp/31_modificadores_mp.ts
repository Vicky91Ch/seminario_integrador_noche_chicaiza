// Concepto puro - Cuenta de concesionario
class CuentaConcesionario {
  readonly id: string;           // no cambia tras la creación
  public titular: string;        // visible desde fuera
  private saldo: number;         // solo accesible dentro de la clase
  protected moneda: string;      // accesible también en subclases

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "USD";
  }

  // Método público que expone el saldo de forma controlada
  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaConcesionario("CC-001", "Concesionario MotoMax", 50000);
console.log(cuenta.titular);         // Concesionario MotoMax
console.log(cuenta.id);              // CC-001
console.log(cuenta.obtenerSaldo());  // 50000
cuenta.depositar(15000);
console.log(cuenta.obtenerSaldo());  // 65000

// cuenta.saldo = 999999;  // Error: 'saldo' is private
// cuenta.id = "otro";     // Error: 'id' is readonly
