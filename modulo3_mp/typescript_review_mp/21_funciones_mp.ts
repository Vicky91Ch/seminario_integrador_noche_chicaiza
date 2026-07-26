// Concepto puro - Motos
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}

function saludoVenta(nombre: string): string {
  return `Bienvenido, ${nombre}`;
}

// TypeScript verifica el argumento Y el retorno
console.log(calcularTotal(4500, 3));        // 13500
console.log(saludoVenta("Carlos"));         // Bienvenido, Carlos

// Error de compilación — a propósito (descoméntalo para verlo):
// calcularTotal("4500", 3);  // Argument of type 'string' is not assignable to 'number'

function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenVenta(modelo: string, precio: number, descuento: number): string {
  const final = calcularDescuento(precio, descuento);
  return `${modelo}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenVenta("Yamaha R15", 4500, 10));   // Yamaha R15: $4500 → $4050 (10% off)
console.log(resumenVenta("Honda CB", 6500, 15));      // Honda CB: $6500 → $5525 (15% off)
console.log(resumenVenta("Suzuki GSX", 5100, 0));    // Suzuki GSX: $5100 → $5100 (0% off)
