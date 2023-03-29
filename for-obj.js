const user = {
    name: "Alexander",
    lastName: "Caal",
    year: 11,
}

console.log("--------key")
for (const key in  user) {
        const element = user[key];
        console.log(`key: ${key}, elemento: ${element}`)
}

console.log("----- of")
for (const value of "holacomoteva") {
    // const index =1 ;
    if (["t", "T"].includes(value)) {
        console.log("existe la T")
        break
    }
    console.log("a")
}

// Object.keys(user)
// Object.values(user)
