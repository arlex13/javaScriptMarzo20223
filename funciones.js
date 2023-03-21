function saludar() {
    console.log("Hola !!")
}

const saludar2 = function ( nombre, puesto, ...arg ) {
    console.log("hola #2, ", nombre, puesto)
    console.log("arg: ", arg)
    console.log(arguments)
}

const saludarFlecha = (nombre,  ...arg) =>{
    console.log("funcion flecha, ", nombre)
    console.log("arg: ", arg)
}


// saludar2("Alexander", "Desarrollador", 1, true, 3)
// saludarFlecha("Alexander", "Desarrollador", true, 22 )


const usuario = ({edad="No lo registro", nombre="No tengo", departamento="No tiene", ...arg }) =>{
    // console.log("informacion: ", persona)
    console.log("edad: ", edad)
    console.log("nombre: ", nombre)
    console.log("departamento: ", departamento)
    console.log("otra info", arg)
}

// const per = {
//     edad: 25,
//     nombre: "Alexander",
//     departamento: "Alta Verapaz",
// }
// usuario({  nombre: "Wilson", edad: 24, esAdmin:  true, trabaja: true, cel: 5164  })

const alCuadrado = (numero)=>{
    const alCuadrado = numero * numero
    // console.log("ejecuantando al cuadrado", alCuadrado)

    //return {alCuadrado: alCuadrado, saludar: "hola mucho gusto"}
    // como el nombre de la clave y la variable del valor es el mismo, se elimina uno
    console.log("Antes del return")
    return {alCuadrado, saludar: "hola mucho gusto"}
    console.log("mas codigo, no se ejecuta, por el return de arriba")
}

// console.log(alCuadrado(3))
// const retornoFuncion = alCuadrado(3)
// console.log("retorno ", retornoFuncion)

const validarNumero= (numero)=>{
    return typeof(numero) === 'number'
}

const validarDPI= (numero)=>{
    return typeof(numero) === 'number' && String(numero).length === 13 
}

// const esNumero = validarNumero(12341234)
// console.log("dato correcto: ", esNumero )

const isDPI = validarDPI(3331234123453)
console.log("Es DPI: ", isDPI)