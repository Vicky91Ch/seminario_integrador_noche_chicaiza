// Concepto puro - Motos

// El rest parameter SIEMPRE es el último
function sumarPrecios(...precios: number[]): number {
  return precios.reduce((acc, p) => acc + p, 0);
}

console.log(sumarPrecios(4500, 3200, 5100));          // 12800
console.log(sumarPrecios(7000, 8500, 6200, 4300));   // 26000
console.log(sumarPrecios());                            // 0

// Combinado con parámetros normales
function construirRuta(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRuta("https://api.motos.com", "inventario", "yamaha", "r15"));
// https://api.motos.com/inventario/yamaha/r15

function registrarVenta(vendedor: string, ...modelos: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const lista = modelos.length > 0 ? ` | ${modelos.join(" · ")}` : "";
  console.log(`[${timestamp}] VENTA por ${vendedor}${lista}`);
}

registrarVenta("Carlos");
// [10:05:01] VENTA por Carlos

registrarVenta("Ana", "Yamaha R15", "Honda CB");
// [10:05:02] VENTA por Ana | Yamaha R15 · Honda CB

registrarVenta("Pedro", "Suzuki GSX", "Kawasaki Z400", "KTM Duke");
// [10:05:03] VENTA por Pedro | Suzuki GSX · Kawasaki Z400 · KTM Duke
