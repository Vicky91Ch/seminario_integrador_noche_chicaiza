const profesor: {nombre: string; catedra: string; activo: boolean; horario: string} = {
    nombre: "Antonio Carrera",
    catedra: "Algebra",
    activo: true,
    horario: "Lunes a Viernes de 18:00 a 22:00"
};

console.log(profesor.nombre);
console.log(profesor.catedra);
console.log(`El horario es: ${profesor.horario}`);