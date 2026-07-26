// tipos-boolean.ts - Estado de Motos
const enStock:      boolean = true;
const financiable:  boolean = false;

console.log(enStock);
console.log(!enStock);                    // false  (negación)
console.log(enStock && financiable);      // false  (ambos deben ser true)
console.log(enStock || financiable);      // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const precio = 5000;
const esBarata: boolean = precio < 3000;
console.log(`¿Es moto económica? ${esBarata}`); // ¿Es moto económica? false
