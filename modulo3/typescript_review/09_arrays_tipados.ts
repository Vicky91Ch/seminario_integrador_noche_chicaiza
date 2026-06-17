// arrays.ts

const nombres2:   string[]  = ["Ana", "Luis", "Marta"];
const edades2:    number[]  = [28, 31, 25];
const activos2:   boolean[] = [true, false, true];

console.log(nombres2);
console.log(nombres2[0]);        // "Ana"
console.log(nombres2.length);    // 3

// Los métodos de array funcionan igual que en JS
nombres2.push("Carlos");
console.log(nombres2);

const mayusculas1 = nombres2.map(n => n.toUpperCase());
console.log(mayusculas1);

const adultos1 = edades2.filter(e => e >= 18);
console.log(adultos1);

// TypeScript avisa si añades el tipo incorrecto
// nombres.push(42);  // ❌ Error: 'number' no es 'string'