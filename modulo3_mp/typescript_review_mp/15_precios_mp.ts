// Concepto puro - Motos

const preciosMotos = [4500, 3200, 5100, 6800, 2900];
let maxPrecio = 0;
for (const precio of preciosMotos) {
    if (precio > maxPrecio){
        maxPrecio = precio;
    }
}
console.log(`Moto más cara: $${maxPrecio}`);
