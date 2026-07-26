const mecanico: {nombre: string; especialidad: string; activo: boolean; horario: string} = {
    nombre: "Carlos Pérez",
    especialidad: "Motos deportivas",
    activo: true,
    horario: "Lunes a Viernes de 08:00 a 17:00"
};

console.log(mecanico.nombre);
console.log(mecanico.especialidad);
console.log(`El horario es: ${mecanico.horario}`);
