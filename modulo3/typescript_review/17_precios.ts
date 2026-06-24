const precios: number[] = [100, 250, 80, 500];

const preciosIva: number[] = precios.map((p) =>
    Number((p * 1.19).toFixed(2))
);
console.log(precios);
preciosIva.forEach((precio) =>
    console.log(`Precio con IVA: ${precio}`)
);