// const esAdministrador = true // false
// const habilitado = true
// const vencido = false
// // conector And
// const esAdminAndHabilitado = esAdministrador && habilitado 
// if (esAdminAndHabilitado && !vencido ) {
//     console.log("Entraste al sistema")
// }else{
//     console.log("NO puedes acceder")
// }

// conector OR
// 1 = admin
// 2 = analista de datos
// 3 = cajero
// const rol = 1
// const cookisNoVencido = true
// if ((rol == 1 || rol== 2) && cookisNoVencido  ) {
//     console.log("Podras ver los reportes")
// }else{
//     console.log("No podras ver los reportes")
// }


const regresaTrue = () =>{
    console.log("Regresamos True");
    return true;
}
const regresaFalse = () =>{
    console.log("Regresamos False");
    return false;
}
console.log("---- Not, negación")
console.log( !regresaTrue() )
console.log(!true)

console.log("--- And ") // true si todos los valores son verdaderos
console.log(true && true ) //true
console.log(true && !false) //true
console.log(true && false) //false
console.log(true && false && true && true) //false

console.log("and #1----------  ")
// console.log( regresaFalse() && regresaTrue())
console.log( regresaTrue() && regresaFalse() && regresaTrue() )

console.log("---- Or ") // true si por lo menos un valor es verdadero
console.log(false || true ) // true
console.log(false || false || true || false ) // true
console.log(false || false  ) // false

console.log("or #1----------  ")
// console.log( regresaTrue() || regresaFalse() || regresaTrue() )
console.log( regresaFalse() || regresaFalse() || regresaTrue() || regresaFalse() )


console.warn(" **** Asignaciones **** ")

const soyUndefined = undefined
const soyNull = null
const soyFalse = false

const a1 = false && 'hola mundo' && 150; // false
const a2 = 'hola' && 'mundo' && soyFalse && true 

const a3 = soyFalse || "yo no soy falso"
const a4 = soyFalse || soyUndefined || soyNull || "Yo tengo datos" || 11;
const a5 = soyFalse || soyUndefined || soyNull || "" || 0 || 11 || "Hola";


if ((!regresaFalse() || regresaTrue()) &&  (regresaTrue() || regresaFalse())) {
    console.log("Hacer algo")
}else{
    console.log("Estoy en else")
}
