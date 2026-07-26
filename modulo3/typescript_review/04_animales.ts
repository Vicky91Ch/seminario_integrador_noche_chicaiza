const nombre1:    string = "Copito";
const raza:    string = `Perro, ${nombre1}`;
const color:     string = "Gris";
const dueno:  string = 'Vicky';

console.log(nombre1);
console.log(raza);
console.log(`La cadena color tiene longitud: ${color.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre1.toUpperCase());      // Copito PERRO
console.log(nombre1.toLowerCase());      // Copito Perro
console.log(nombre1.includes("Copito")); // true
console.log(nombre1.split(" "));         // ["Copito", "Perro"]