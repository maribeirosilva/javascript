function tabuada() {
    var tabuadaNum = Number(document.querySelector('#numTab').value)
    var res = document.querySelector('#res')

    if (tabuadaNum == 0) {
        window.alert('Dados inválidos. Selecione um número maior ou igual a 0.')
    } else {
        res.innerHTML = ''
        for ( i = 1; i <= 10; i++ ) {
            var resTabuada = tabuadaNum * i 
            res.innerHTML += `${tabuadaNum} x ${i} = ${resTabuada} <br>`
        }
    }
}

// Código feito pelo professor
// function tabuada() {
//     let num = document.getElementById('txtn')
//     let tab = document.getElementById('seltab')
//     if (num.value.length == 0) {
//         window.alert('Por favor, digite um número!')
//     } else {
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ''
//         while (c <= 10) {
//             let item = document.createElement('option')
//             item.text = `${n} x ${c} = ${n * c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             c++
//         }
//     }
// }


// No HTML dele, após o input:button, tem essa diva aqui
/* <div>
    <select name="tabuada" id="seltab" size="10">
        <option>Digite um número acima</option>
    </select>
</div> */
