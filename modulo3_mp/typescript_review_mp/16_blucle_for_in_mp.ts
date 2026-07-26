// Concepto puro - Motos
const concesionario: Record<string, number> = {
  Yamaha: 15,
  Honda: 12,
  Suzuki: 8,
  Kawasaki: 5,
};

for (const marca in concesionario) {
  console.log(`${marca} → ${concesionario[marca]} motos en stock`);
}

const especificaciones = {
  marca: "Yamaha",
  modelo: "R15",
  cc: 155,
  peso: 142,
};

console.log("=== Ficha Técnica ===");
for (const clave in especificaciones) {
  const valor = especificaciones[clave as keyof typeof especificaciones];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}
