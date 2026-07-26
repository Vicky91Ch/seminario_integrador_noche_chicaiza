// Concepto puro
const numeros: number[] = [1, 2, 3, 4];

// forEach: para "hacer algo" con cada elemento
numeros.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40
// forEach con bloque de codigo amplio
numeros.forEach((numero) => {
    console.log(numero * 10);
    console.log(numero * 2);
    console.log(numero * 5);
});

// map: para CREAR una lista transformada
const dobles: number[] = numeros.map((n) => n * 2);
console.log(dobles);  // [2, 4, 6, 8]

// normalizar correos electronicos
const emails: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];

const limpios: string[] = emails.map((e) => e.trim().toLowerCase());
console.log(limpios);  // ["ana@mail.com", "luis@mail.com", "pepe@mail.com"]

// forEach para reportar, map para transformar
limpios.forEach((e, i) => console.log(`Usuario ${i + 1}: ${e}`));