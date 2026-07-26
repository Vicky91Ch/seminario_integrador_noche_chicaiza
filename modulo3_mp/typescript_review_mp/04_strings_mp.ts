// tipos-string.ts - Motos
const modelo:      string = "Honda CB 500";
const saludo:      string = `Bienvenido a la tienda de ${modelo}`;
const vacia:       string = "";
const comillas:    string = 'También con comillas simples';

console.log(modelo);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(modelo.toUpperCase());      // HONDA CB 500
console.log(modelo.toLowerCase());      // honda cb 500
console.log(modelo.includes("Honda"));  // true
console.log(modelo.split(" "));         // ["Honda", "CB", "500"]
