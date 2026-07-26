// Concepto puro - Motos

// Tipo de función nombrado
type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Función que DEVUELVE una función
function multiplierDe(factor: number): Transformador {
  return (x) => x * factor;
}

// Uso
const triple = multiplierDe(3);
const cuadrado: Transformador = (x) => x * x;

console.log(aplicar(1500, triple));     // 4500
console.log(aplicar(5, cuadrado));      // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con un predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const precios = [4500, 3200, 5100, 6800, 2900, 7500];
console.log(filtrar(precios, (p) => p > 5000));    // [5100, 6800, 7500]
console.log(filtrar(precios, (p) => p < 4000));    // [3200, 2900]
