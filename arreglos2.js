let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log("index 1", juegos[1]);
const ultimo = juegos.length - 1;
console.log("Ultimo index", juegos[ultimo]);

juegos.unshift("Valorant")//al principio
juegos.push("LOL");//al final
console.log("juegos", juegos)

const indexMario = juegos.indexOf("Mario")
console.log("index Mario: ", indexMario )
console.log("Mario: ", juegos[indexMario])

juegos.forEach((juego, i )=>{
    console.log("Posición: ", i , " = " , juego)
})



