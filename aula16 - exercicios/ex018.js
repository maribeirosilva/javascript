function adicionar() {
    num = Number(document.querySelector('#numEscolhido').value)
    if ( num < 1 || num > 100) {
        window.alert('[ERRO] Escreva um número entre 1 e 100!')
    } else {
        let item = document.createElement('option')
           item.text = ``
           item.value = `tab${c}`
        tab.appendChild(item)
    }
}