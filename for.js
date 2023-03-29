const array = ["a", "b"]
for(let i = 0; i < array.length; i++) {
    // const element = array[i];
    console.log("index:: ", i)
    console.log("elemento: ", array[i])

    console.log(`index: ${i}, elemento ${array[i]} `)
    console.log("index: "+ i +", elemento " + array[1]) 
}

console.log("--------key")
for (const key in array) {
        const element = array[key];
        console.log(key + " elemento: ", element)
}

console.log("----- of")
for (const iterator of array) {
    const index = array.indexOf(iterator)
    console.log(index + " elemento", iterator)
}