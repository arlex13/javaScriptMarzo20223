// console.log("inicio del codigo")
const isAdmin = true // false
const edad = 18
//edad >= 18
// if ( 18 <= edad  ) {
//     console.log(">> Es mayor de edad")
// }else{
//     console.log("## No es mayor de edad")
// }
// console.log("abajo del if")


// roles
// 1 = Admin
// 2 = Cliente
// 3 = Cajero
// const rol = 4
// if (rol == 1 ) {
    
//     console.log("Eres admin")

// }else if (rol==2) {
    
//     console.log("Eres Cliente")

// }else if (rol == 3) {
    
//     console.log("Eres Cajero")

// }else{
//     // console.log("No esta definido tu rol")
// }
    

// ---- roles
// 1 = Admin
// 2 = Cliente
// 3 = Cajero
// const rolUser = 0
// const roles = {
//     1: "Administrador",
//     2: "Cliente",
//     3: "Cajero",
//     0: "Programdor"
//  }

// console.log("----------------")
// const nombreRol = roles[rolUser]  || "Rol no definido" 
// console.log("rol> ", nombreRol )


///*-***************************** 
// const rolUser = 1
// const roles = {
//     1: (nombre)=>{ 
//         console.log("Hola mucho gusto admin", nombre)
//     },
//     2: (nombre)=>{ 
//         console.log("Hola mucho gusto Cliente", nombre)
//     },
//  }
//  roles[rolUser]("Alexander")


// roles
// 1 = Admin
// 2 = Cliente
// 3 = Cajero
const rol = "3"
// ===
switch (rol) {
    case "1" :
        console.log("Es Admin")
        break;

    case"2" :
        console.log("Es cliente")
        break;

    case "3" :
        console.log("Es Cajero")
        break;

    default:
        console.log("No esta definido ")
        break;
}
 