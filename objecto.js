let animal = {
    nombre: 'Perro',
    edad: 2,
    medicamento: {
        m1: "tomar 2 veces al dia",
        m2: "tomar 4 veces al dia",
    }
    // comer: ()=>{},
    // estaEnfermo: true,
}


let animal2 = {...animal}
// let animal2 = JSON.parse(JSON.stringify(animal) )  

animal2.color = "blanco"
animal2.medicamento.m3= "tomar: 6, veces: al dia"

// console.log("animal: ", typeof animal)
// console.log("animal: ", animal)
// console.log("animal2: ", animal2)

// console.log("animal nombre: ", animal.nombre)
// let name = "nombre"
// console.log("x animal nombre: ", animal[name])


let meses = [ 'e', 'f', 'm']
let casa = { 
    tamano: "Grande",
    color: "Verde",
}
// console.table(meses)
let valor = 1
console.log("meses:: ", meses[valor])

// console.log("casa", casa)
// console.table(casa)

