// Concepto puro - Motos en concesionario
type EstadoMoto = "disponible" | "reservada" | "vendida" | "en_taller";

interface MotaConcesionario {
  modelo: string;
  estado: EstadoMoto;
  precio: number;
}

const inventario: MotaConcesionario[] = [
  { modelo: "Yamaha R15",     estado: "disponible", precio: 4500 },
  { modelo: "Honda CB 500",   estado: "reservada",  precio: 6500 },
  { modelo: "Suzuki GSX",     estado: "vendida",    precio: 5100 },
  { modelo: "Kawasaki Z400",  estado: "disponible", precio: 7200 },
];

console.log("=== Diagnóstico de Inventario ===");
let vendidas = 0;

for (const m of inventario) {
  if (m.estado === "vendida") vendidas++;

  // switch para traducir el estado a un ícono
  let icono: string;
  switch (m.estado) {
    case "disponible": icono = "🟢"; break;
    case "reservada":  icono = "🟡"; break;
    case "vendida":    icono = "🔴"; break;
    case "en_taller":  icono = "🔧"; break;
    default:           icono = "⚪";
  }

  // if anidado para matizar el diagnóstico
  let diagnostico: string;
  if (m.estado === "disponible") {
    if (m.precio < 5000) {
      diagnostico = `${icono} ${m.modelo}: económico ($${m.precio})`;
    } else {
      diagnostico = `${icono} ${m.modelo}: gama alta ($${m.precio})`;
    }
  } else {
    diagnostico = `${icono} ${m.modelo}: ${m.estado}`;
  }

  console.log(diagnostico);
}

// while para alertar mientras haya motos vendidas (simulado)
let alerta = vendidas;
while (alerta > 0) {
  console.log(`📊 Quedan ${alerta} moto(s) vendida(s) — procesando comisión...`);
  alerta--;
}
console.log(`Resumen: ${vendidas}/${inventario.length} vendidas`);
