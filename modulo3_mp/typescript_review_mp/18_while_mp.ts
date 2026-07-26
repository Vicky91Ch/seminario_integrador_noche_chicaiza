// while.ts - Procesamiento de Inventario de Motos
const stockMotos: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                   ↑              ↑   registros corruptos (negativos)

// continue: ignora los corruptos pero sigue procesando
console.log("=== con continue ===");
for (const s of stockMotos) {
  if (s < 0) {
    console.log("Registro corrupto ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${s} motos en inventario`);
}

// break: se detiene al primer error crítico
console.log("=== con break ===");
for (const s of stockMotos) {
  if (s < 0) {
    console.log("Error crítico — deteniendo inventario");
    break;  // sale del bucle
  }
  console.log(`Procesando ${s} motos en inventario`);
}
