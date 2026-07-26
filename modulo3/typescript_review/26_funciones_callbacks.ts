// Concepto puro

// Tipo de función nombrado
type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Función que DEVUELVE una función
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

// Uso
const triple = multiplicadorDe(3);
const cuadrado: Transformador = (x) => x * x;

console.log(aplicar(5, triple));    // 15
console.log(aplicar(5, cuadrado)); // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con un predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(nums, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrar(nums, (n) => n > 5));       // [6, 7, 8]