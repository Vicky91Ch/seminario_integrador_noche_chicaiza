console.log("------------------------");
const notas = { mate: 85, fisica: 70,quimica: 95, historia: 60 }
let contador =0;
for (const valor in notas){
    const valores = notas[valor as keyof typeof notas];
    if (valores >= 70){
        console.log( `Aprobadas: ${valor}` );
        contador ++;
    }
}
console.log(contador);