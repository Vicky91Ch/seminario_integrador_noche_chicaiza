// switch.ts - Estados de Motos

const tipoMoto: number = 2;

switch (tipoMoto) {
  case 1:
    console.log("Moto deportiva");
    break;
  case 2:
    console.log("Moto touring");  // ← este se ejecuta
    break;
  case 3:
    console.log("Moto naked");
    break;
  case 4:
    console.log("Moto enduro");
    break;
  case 5:
    console.log("Moto scooter");
    break;
  case 6:
  case 7:
    console.log("Moto custom/chopper");
    break;
  default:
    console.log("Tipo no válido");
}

// Switch con string
type EstadoMoto = "disponible" | "reservada" | "vendida" | "en_taller";

function mensajeMoto(estado: EstadoMoto): string {
  switch (estado) {
    case "disponible":
      return "La moto está lista para la venta";
    case "reservada":
      return "La moto tiene un cliente interesado";
    case "vendida":
      return "La moto ya fue vendida";
    case "en_taller":
      return "La moto está en mantenimiento";
  }
}

// TypeScript sabe que los 4 casos son todos los posibles
// No necesita default — si añades un estado nuevo, exige manejarlo

console.log(mensajeMoto("reservada"));    // La moto tiene un cliente interesado
console.log(mensajeMoto("en_taller"));    // La moto está en mantenimiento
