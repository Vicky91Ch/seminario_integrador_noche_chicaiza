// Concepto puro - Motos
interface Moto {
  readonly vin: string;         // no se puede cambiar después de crear el objeto
  marca: string;                // obligatoria
  modelo: string;               // obligatoria
  year?: number;                // opcional: puede estar o no
  precio: number;
  enStock: boolean;
}

const moto1: Moto = { vin: "VIN-001", marca: "Yamaha", modelo: "R15", precio: 4500, enStock: true };

// moto1.vin = "VIN-999"; // ERROR: no se puede asignar a 'vin' porque es de solo lectura

// La propiedad opcional puede omitirse sin error:
const moto2: Moto = { vin: "VIN-002", marca: "Honda", modelo: "CB 500", year: 2025, precio: 6500, enStock: false };

interface InventarioMoto {
  readonly sku: string;
  modelo: string;
  precio: number;
  especificaciones?: string;    // texto largo, no siempre presente
  enStock: boolean;
}

function mostrarMoto(m: InventarioMoto): void {
  const desc = m.especificaciones ? ` — ${m.especificaciones}` : "";
  const stock = m.enStock ? "Disponible" : "Agotado";
  console.log(`[${m.sku}] ${m.modelo} $${m.precio}${desc} (${stock})`);
}

const deportiva: InventarioMoto = {
  sku: "YAM-R15-001",
  modelo: "Yamaha R15",
  precio: 4500,
  especificaciones: "155cc, 18.6HP, ABS",
  enStock: true,
};

const scooter: InventarioMoto = {
  sku: "HON-PCX-042",
  modelo: "Honda PCX",
  precio: 3200,
  enStock: false,
};

mostrarMoto(deportiva); // [YAM-R15-001] Yamaha R15 $4500 — 155cc, 18.6HP, ABS (Disponible)
mostrarMoto(scooter);   // [HON-PCX-042] Honda PCX $3200 (Agotado)
