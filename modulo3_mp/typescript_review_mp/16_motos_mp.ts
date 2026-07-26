// Concepto puro - Motos
console.log("------------------------");
const calificaciones = { Yamaha: 90, Honda: 85, Suzuki: 95, Kawasaki: 70 }
let contador = 0;
for (const marca in calificaciones){
    const valor = calificaciones[marca as keyof typeof calificaciones];
    if (valor >= 85){
        console.log(`Marcas aprobadas: ${marca}`);
        contador ++;
    }
}
console.log(`Total marcas aprobadas: ${contador}`);
