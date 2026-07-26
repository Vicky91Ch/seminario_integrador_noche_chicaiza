const marca1:    string = "Yamaha";
const modelo1:   string = `Moto, ${marca1}`;
const color:     string = "Roja";
const dueno:     string = 'Vicky';

console.log(marca1);
console.log(modelo1);
console.log(`La cadena color tiene longitud: ${color.length}`);

// Métodos de string funcionan igual que en JS
console.log(marca1.toUpperCase());      // YAMAHA
console.log(marca1.toLowerCase());      // yamaha
console.log(marca1.includes("Yamaha")); // true
console.log(marca1.split(" "));         // ["Yamaha"]
