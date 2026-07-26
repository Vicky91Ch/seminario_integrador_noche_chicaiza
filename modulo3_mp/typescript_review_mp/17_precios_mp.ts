// Concepto puro - Motos
const preciosMotos: number[] = [4500, 3200, 5100, 6800];

const preciosConIva: number[] = preciosMotos.map((p) =>
    Number((p * 1.19).toFixed(2))
);
console.log("Precios originales:", preciosMotos);
preciosConIva.forEach((precio) =>
    console.log(`Precio con IVA: $${precio}`)
);
