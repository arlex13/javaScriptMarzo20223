
/*
  Dias de semana abrimos a las 11, 
 pero los fines de semana abrimos a las 9, 
*/

// Entra a un sitio web, para consultar si esta abierto hoy...
const dia = 1
const horaActual = 11 

let horaApertura;
let mensaje;
/*
if (dia == 0 || dia == 6 ) {
    horaApertura = 9;
} else {
    horaApertura = 11;
}*/

// horaApertura = (dia == 0 || dia == 6) ? 9 : 11

horaApertura = ([0,6].includes(dia) ) ? 9 : 11


/*if (horaActual >= horaApertura) {
    mensaje = "Abierto";
} else {
    mensaje = "Cerrado";
}*/

mensaje = (horaActual >= horaApertura)? "Abierto" : "Cerrado";

console.log(mensaje);

// (condicion) ? true : false
