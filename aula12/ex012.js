var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora == 0 || hora <= 5) {
    console.log('De madrugada acordado?')
} else if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora < 23) {
    console.log('Boa noite!')
}