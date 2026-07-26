// tipo-any.ts - Motos

let dato: any = "Honda";
console.log(dato, "→", typeof dato);

dato = 4500;        // ✅ sin error
console.log(dato, "→", typeof dato);

dato = true;        // ✅ sin error
console.log(dato, "→", typeof dato);

dato = [1, 2, 3];   // ✅ sin error
console.log(dato, "→", typeof dato);

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
// console.log(dato.metodoQueNoExiste()); // ❌ compila, pero revienta al ejecutar

export {};