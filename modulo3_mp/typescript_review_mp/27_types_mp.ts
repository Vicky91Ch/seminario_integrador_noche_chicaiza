// Concepto puro - Motos
type ID = string | number;           // unión de primitivos
type Marca = string;                 // alias de primitivo (documenta intención)
type Coordenadas = [number, number]; // alias de tupla

// Alias de objeto
type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;          // válido
const id2: ID = "MOTO-001"; // también válido

type MotoID = string | number;
type Estado = "nuevo" | "usado" | "certificado";

type Vehiculo = {
  id: MotoID;
  modelo: string;
  estado: Estado;
  disponible: boolean;
};

function imprimirVehiculo(v: Vehiculo): void {
  const estrella = v.estado === "certificado" ? " ⭐" : "";
  console.log(`[${v.id}] ${v.modelo} — ${v.estado}${estrella}`);
}

const m1: Vehiculo = { id: "MOTO-001", modelo: "Yamaha R15",    estado: "nuevo",      disponible: true };
const m2: Vehiculo = { id: 42,         modelo: "Honda CB 500",  estado: "certificado", disponible: true };

imprimirVehiculo(m1); // [MOTO-001] Yamaha R15 — nuevo
imprimirVehiculo(m2); // [42] Honda CB 500 — certificado ⭐
