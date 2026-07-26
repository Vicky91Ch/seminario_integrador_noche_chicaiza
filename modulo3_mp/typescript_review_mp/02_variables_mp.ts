// Con tipo explícito - Venta de Motos
const marcaMoto: string  = "Yamaha";
const cc:         number  = 150;
const disponible: boolean = true;

console.log("Marca:", marcaMoto);
console.log("Cilindraje:", cc);
console.log("Disponible:", disponible);

// Sin tipo — TypeScript lo infiere automáticamente del valor
const marcaMoto2 = "Honda";   // TypeScript sabe que es string
const cc2        = 250;       // TypeScript sabe que es number
const disponible2 = false;    // TypeScript sabe que es boolean

console.log("Marca 2:", marcaMoto2);
console.log("Cilindraje 2:", cc2);
console.log("Disponible 2:", disponible2);

export {};