// for-of.ts - Lista de Motos

const marcas: string[] = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];
const preciosMotos: number[] = [4500, 3200, 5100, 6800, 2900];

// TypeScript sabe que 'marca' es string
for (const marca of marcas) {
  console.log(`Marca: ${marca}`);
  // marca.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'precio' es number
let totalInventario: number = 0;
for (const precio of preciosMotos) {
  totalInventario += precio;
  // precio.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total inventario: $${totalInventario}`);

// Con índice usando entries()
for (const [indice, marca] of marcas.entries()) {
  console.log(`${indice + 1}. ${marca}`);
}


interface VentaMoto {
  modelo: string;
  precio: number;
  cantidad: number;
}

const ventas: VentaMoto[] = [
  { modelo: "Yamaha R15",  precio: 4500, cantidad: 2 },
  { modelo: "Honda CB",    precio: 3200, cantidad: 1 },
  { modelo: "Suzuki GSX",  precio: 5100, cantidad: 3 },
];

let totalVentas = 0;
for (const venta of ventas) {
  const subtotal = venta.precio * venta.cantidad;
  console.log(`${venta.modelo}: $${subtotal}`);
  totalVentas += subtotal;
}
console.log(`TOTAL VENTAS: $${totalVentas}`);
