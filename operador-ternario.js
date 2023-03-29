const isAdmin = false
let msg

if (isAdmin) {
    msg = "bienvenido !!"
}else{
    msg = "No puedes entrar"
}

console.log(msg)

console.log("------ operador ternario")
const errorMensaje = "ELSE solicita al admin permisos por favor"
let msg2 = (isAdmin && true)? "Bienvenido admin" : errorMensaje
console.log(msg2)


console.log("-======== Funciones")

const abrirModulo = ()=>{
    console.log("abriendo modulo ")
}

const accesoDenegado= ()=>{
    console.log("ejecutando el mensaje de error")
}

let ejectuarFuncion = (isAdmin) ? abrirModulo : accesoDenegado 
ejectuarFuncion()
