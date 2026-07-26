// Concepto puro - Motos

// Opcional: el parámetro puede no llegarse a pasar
function crearEtiqueta(modelo: string, stock?: boolean): string {
  // Dentro, stock es boolean | undefined
  if (stock) {
    return `[${modelo.toUpperCase()}] ✅`;
  }
  return `[${modelo}] ❌`;
}

console.log(crearEtiqueta("Yamaha R15"));          // [Yamaha R15] ❌
console.log(crearEtiqueta("Honda CB", true));      // [HONDA CB] ✅

// Por defecto: si no se pasa, usa el valor indicado
function repetir(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetir("moto"));       // motomotomoto  (usa el default 3)
console.log(repetir("moto", 5));    // motomotomotomotomoto

type TipoMoto = "deportiva" | "touring" | "naked" | "enduro";

function registrarMoto(
  modelo: string,
  tipo: TipoMoto = "naked",
  conSeguro?: boolean
): string {
  const prefijos: Record<TipoMoto, string> = {
    deportiva: "🏎️  DEPORTIVA ",
    touring:   "🛣️  TOURING   ",
    naked:     "🏍️  NAKED     ",
    enduro:    "⛰️  ENDURO    ",
  };

  const seguro = conSeguro ? ` [con seguro]` : "";
  return `${prefijos[tipo]}${seguro}: ${modelo}`;
}

console.log(registrarMoto("Yamaha R15"));
// 🏎️  DEPORTIVA : Yamaha R15

console.log(registrarMoto("Honda Gold Wing", "touring"));
// 🛣️  TOURING   : Honda Gold Wing

console.log(registrarMoto("Kawasaki Z400", "naked", true));
// 🏍️  NAKED     [con seguro]: Kawasaki Z400
