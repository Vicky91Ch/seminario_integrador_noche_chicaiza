// null-undefined.ts - Motos

// En JS esto no da error, en TS sí (modo estricto)
// let modelo: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let modelo: string | null = null;   // ✅ puede ser string o null

modelo = "Honda CB";
console.log(modelo);  // "Honda CB"
modelo = null;
console.log(modelo);  // null

// undefined — variable declarada pero sin valor
let vendedor: string | undefined;
console.log(vendedor);  // undefined

vendedor = "Carlos";
console.log(vendedor);  // "Carlos"
