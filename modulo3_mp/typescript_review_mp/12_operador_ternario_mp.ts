// ternario.ts - Motos

const precio: number = 4500;

// Forma larga
let cuota: string;
if (precio < 3000) {
  cuota = "Cuota baja";
} else {
  cuota = "Cuota alta";
}

// Forma corta con ternario
const cuota2: string = precio < 3000 ? "Cuota baja" : "Cuota alta";

console.log(cuota);   // Cuota alta
console.log(cuota2);  // Cuota alta

// Muy útil dentro de template literals
const kilometraje: number = 15000;
const estado = kilometraje < 10000 ? "Excelente" : "Buen estado";
console.log(`Kilometraje: ${kilometraje}km — ${estado}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const clasificacion =
  precio > 8000 ? "Premium" :
  precio > 5000 ? "Gama alta"       :
  precio > 3000 ? "Gama media"      : "Económica";

console.log(clasificacion);  // Gama media
