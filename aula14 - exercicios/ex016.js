function contar() {
    var inicioNum = Number(document.querySelector('#numInicio').value)
    var fimNum = Number(document.querySelector('#numFim').value)
    var passoNum = Number(document.querySelector('#numPasso').value)
    var res = document.getElementById('res')

    if (fimNum <= 0 || passoNum <=0 ) {
        window.alert('Dado inválido. Digite um número maior que 0!')
    } else {
        res.innerHTML = 'Contando...'
        if (inicioNum < fimNum) {
            // Crescente
        for (let c = inicioNum; c <= fimNum; c += passoNum) {
            res.innerHTML += `${c} 👉`
        }
        } else {
            // Regressiva
            for (let c = inicioNum; c >=fimNum; c -= passoNum) {
            res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += '🏁'
    }
}