// for-of.ts

const nombres: string[] = ["Ana", "Luis", "Marta", "Carlos"];
const precios: number[] = [100, 250, 75, 320, 50];

// TypeScript sabe que 'nombre' es string
for (const nombre of nombres) {
  console.log(`Hola, ${nombre}!`);
  // nombre.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'precio' es number
let total: number = 0;
for (const precio of precios) {
  total += precio;
  // precio.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total: ${total}€`);

// Con índice usando entries()
for (const [indice, nombre] of nombres.entries()) {
  console.log(`${indice + 1}. ${nombre}`);
}


interface Item {
  nombre: string;
  precio: number;
  cantidad: number;
}

const carrito: Item[] = [
  { nombre: "Mouse",   precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 80, cantidad: 1 },
  { nombre: "Monitor", precio: 200, cantidad: 3 },
];

let totalCarrito = 0;
for (const item of carrito) {
  const subtotal = item.precio * item.cantidad;
  console.log(`${item.nombre}: $${subtotal}`);
  totalCarrito += subtotal;
}
console.log(`TOTAL: $${totalCarrito}`);  // TOTAL: $730



