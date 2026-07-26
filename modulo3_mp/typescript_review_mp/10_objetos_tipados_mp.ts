// objetos.ts - Motos

// Declarar el tipo del objeto
const moto: { modelo: string; precio: number; disponible: boolean } = {
  modelo: "Yamaha R15",
  precio: 4500,
  disponible: true
};

console.log(moto.modelo);
console.log(moto.precio);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const moto2: { modelo: string; precio: number } = {
//   modelo: "Honda"
//   // ❌ Error: falta 'precio'
// };

// Propiedad opcional — se añade ? después del nombre
const inventario: { modelo: string; precio: number; descuento?: number } = {
  modelo:  "Honda CB 500",
  precio:  6500
  // descuento es opcional, no hace falta incluirlo
};

console.log(inventario.descuento); // undefined — no se lanza error
