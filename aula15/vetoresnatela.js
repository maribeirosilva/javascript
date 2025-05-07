let vetores = [5, 1, 5, 8, 2]

vetores.push(8)
vetores.sort()

// console.log(vetores[0]) // Mostra de forma única a posição de um determinado elemento

// for (let pos=0; pos < vetores.length; pos++ ) {
//     console.log(`A posição ${pos} tem o valor de ${vetores[pos]}`)
// }

for (let pos in vetores) {
    console.log(`A posição ${pos} tem o valor de ${vetores[pos]}`)
}