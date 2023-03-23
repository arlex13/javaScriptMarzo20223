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
const rol = 1
const cookisNoVencido = true
if ((rol == 1 || rol== 2) && cookisNoVencido  ) {
    console.log("Podras ver los reportes")
}else{
    console.log("No podras ver los reportes")
}

