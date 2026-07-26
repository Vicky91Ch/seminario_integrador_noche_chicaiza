// Concepto puro - Motos

// void — no hay valor de retorno significativo
function imprimirFactura(texto: string): void {
  console.log(texto);
  // No hay return, o hay un "return;" vacío
}

// never — la función nunca retorna
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
  // TypeScript sabe que el código tras throw es inalcanzable
}

function bucleInfinito(): never {
  while (true) {
    // proceso eterno de un worker, por ejemplo
  }
}

// Inferencia — TypeScript deduce "number"
function calcularTotal(a: number, b: number) {
  return a * b; // tipo inferido: number
}

// Pero el retorno explícito actúa de contrato:
function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("No se puede dividir entre cero");
  return a / b;
}

type CodigoRespuesta = 200 | 400 | 401 | 403 | 404 | 500;

function manejarRespuesta(codigo: CodigoRespuesta, datos?: string): void {
  if (codigo === 200) {
    console.log(`Éxito: ${datos ?? "sin datos"}`);
    return; // return vacío en void
  }
  procesarError(codigo); // never — el flujo no sigue
}

function procesarError(codigo: CodigoRespuesta): never {
  const mensajes: Partial<Record<CodigoRespuesta, string>> = {
    400: "Solicitud inválida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Moto no encontrada",
    500: "Error interno del servidor",
  };
  throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuesta(200, "inventario cargado");  // Éxito: inventario cargado
// manejarRespuesta(404);                 // Lanza Error: HTTP 404: Moto no encontrada
