// break.ts - Procesamiento de Inventario de Motos
const registrosStock: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                        ↑              ↑   registros corruptos (negativos)

// continue: ignora los corruptos pero sigue procesando
console.log("=== con continue ===");
for (const r of registrosStock) {
  if (r < 0) {
    console.log("Registro corrupto ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${r} motos en inventario`);
}

// break: se detiene al primer error crítico
console.log("=== con break ===");
for (const r of registrosStock) {
  if (r < 0) {
    console.log("Error crítico — deteniendo");
    break;  // sale del bucle
  }
  console.log(`Procesando ${r} motos en inventario`);
}
