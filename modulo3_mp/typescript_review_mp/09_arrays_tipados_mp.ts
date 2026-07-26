// arrays.ts - Inventario de Motos

const marcas:    string[]  = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];
const precios:   number[]  = [4500, 3200, 5100, 6800];
const disponibles: boolean[] = [true, false, true, true];

console.log(marcas);
console.log(marcas[0]);        // "Yamaha"
console.log(marcas.length);    // 4

// Los métodos de array funcionan igual que en JS
marcas.push("KTM");
console.log(marcas);

const mayusculas1 = marcas.map(m => m.toUpperCase());
console.log(mayusculas1);

const economicas = precios.filter(p => p < 5000);
console.log(economicas);

// TypeScript avisa si añades el tipo incorrecto
// marcas.push(42);  // ❌ Error: 'number' no es 'string'
