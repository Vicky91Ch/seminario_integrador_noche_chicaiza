// Concepto puro - Motos

// Declaración tradicional
function precioConIva(precio: number): number {
  return precio * 1.19;
}

// Flecha equivalente — con cuerpo explícito
const precioConIvaFlecha = (precio: number): number => {
  return precio * 1.19;
};

// Flecha con retorno implícito (una expresión, sin llaves)
const precioConIvaCorto = (precio: number): number => precio * 1.19;

// Sin parámetros
const fechaActual = (): string => new Date().toLocaleDateString();

// Un solo parámetro (paréntesis opcionales, pero recomendados en TS)
const doble = (n: number): number => n * 2;

console.log(precioConIva(4500));       // 5355
console.log(precioConIvaFlecha(4500)); // 5355
console.log(precioConIvaCorto(4500));  // 5355
console.log(doble(7));                 // 14
console.log(fechaActual());            // e.g. "26/7/2026"

const trim          = (s: string): string => s.trim();
const aMinusculas   = (s: string): string => s.toLowerCase();
const capitalizar   = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

// Encadenar transformaciones manualmente
function normalizarModelo(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const entradas = ["  YAMAHA R15  ", " honda cb ", "SUZUKI  GSX "];
entradas.forEach((e) => console.log(normalizarModelo(e)));
// Yamaha_r15
// Honda_cb
// Suzuki__gsx  (doble espacio interno → doble guión bajo)
