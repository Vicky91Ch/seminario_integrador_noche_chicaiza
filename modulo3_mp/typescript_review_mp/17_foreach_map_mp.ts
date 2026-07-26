// Concepto puro - Motos
const preciosBase: number[] = [4500, 3200, 5100, 6800];

// forEach: para "hacer algo" con cada elemento
preciosBase.forEach((p) => console.log(`Moto: $${p}`));
// forEach con bloque de codigo amplio
preciosBase.forEach((precio) => {
    console.log(`Precio base: $${precio}`);
    console.log(`Con 10% descuento: $${(precio * 0.9).toFixed(2)}`);
    console.log(`Cuotas sin interés: $${(precio / 12).toFixed(2)}/mes`);
});

// map: para CREAR una lista transformada
const preciosConIva: number[] = preciosBase.map((p) => Number((p * 1.19).toFixed(2)));
console.log(preciosConIva);

// normalizar nombres de marcas
const marcasInput: string[] = ["  YAMAHA  ", "hONDA", " SUZUKI "];

const marcasLimpias: string[] = marcasInput.map((m) => m.trim().toLowerCase());
console.log(marcasLimpias);  // ["yamaha", "honda", "suzuki"]

// forEach para reportar, map para transformar
marcasLimpias.forEach((m, i) => console.log(`Marca ${i + 1}: ${m}`));
