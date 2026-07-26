// condicionales.ts - Motos

const stock: number = 15;

if (stock > 20) {
  console.log("Inventario alto - Muchas motos disponibles");
} else if (stock > 5) {
  console.log("Stock moderado");   // ← este se ejecuta
} else if (stock > 0) {
  console.log("Pocas motos disponibles");
} else {
  console.log("Sin stock");
}

// Con boolean
const financiable: boolean = true;

if (financiable) {
  console.log("Se puede financiar esta moto");
} else {
  console.log("Solo pago de contado");
}

// Con string
const estado: string = "nuevo";

if (estado === "nuevo") {
  console.log("Moto 0km - garantía completa");
} else if (estado === "usado") {
  console.log("Moto usada - revisar detalles");
} else {
  console.log("Moto en reparación");
}
