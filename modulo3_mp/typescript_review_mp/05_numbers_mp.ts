// tipos-number.ts - Precios de Motos
const precio:       number = 4500;
const descuento:    number = 5.5;
const kilometraje:  number = 0;
const stockTotal:   number = 1_000_000;
const cuotaMensual: number = precio / 12;

console.log(precio);
console.log(descuento);
console.log(stockTotal);
console.log(cuotaMensual);
console.log(cuotaMensual.toFixed(2));

// Operaciones
console.log(precio + 500);    // 5000
console.log(precio - 300);    // 4200
console.log(precio * 1.19);   // 5355 (con IVA)
console.log(precio / 12);     // 375
console.log(precio % 100);    // 0
console.log(precio ** 2);     // 20250000
