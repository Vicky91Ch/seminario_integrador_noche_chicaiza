// bucle-for.ts - Inventario de Motos

// For clásico
for (let i = 1; i <= 5; i++) {
  console.log(`Moto ${i} revisada`);
}

// Recorrer un array por índice
const modelos: string[] = ["Yamaha R15", "Honda CB", "Suzuki GSX", "Kawasaki Z"];

for (let i = 0; i < modelos.length; i++) {
  console.log(`${i + 1}. ${modelos[i]}`);
}

// For hacia atrás
for (let i = modelos.length - 1; i >= 0; i--) {
  console.log(modelos[i]);
}

// Tabla de cuotas tipada
function tablaCuotas(precioBase: number): void {
  console.log(`\n--- Cuotas para moto de $${precioBase} ---`);
  for (let i = 1; i <= 12; i++) {
    const cuota: number = precioBase / i;
    console.log(`  ${i} cuota(s) de $${cuota.toFixed(2)}`);
  }
}

tablaCuotas(6000);
