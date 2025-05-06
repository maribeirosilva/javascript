function confirmar() {
    var txtAno = window.document.getElementById('anoNum')
        var anoNasc = Number(txtAno.value)
        var res = document.getElementById('res')
        var sexF = document.getElementById('fem')
        var sexM = document.getElementById('masc')

        var data = new Date()
        var ano = data.getFullYear()
        var idade = ano - anoNasc

        if (txtAno.value.length == 0 || txtAno.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente.')
        } else {
            var sexEscolhido = document.getElementsByName('sexo')
            var gen = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            // esse [0] se refere a primeira bolinha do 'input:radio' que no nosso caso, é o genero Masculino. A segunda bolinha seria [1], a terceira [2]d e assim sucessivamente...
            if (sexEscolhido[0].checked) {
                gen = 'Homem'
                if (idade >=0 && idade < 10) {
                    // Criança
                    img.setAttribute('src', 'masc-bebe-img.jpg')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'masc-jovem-img.jpg')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'masc-adulto-img.jpg')
                } else {
                    // idoso
                    img.setAttribute('src', 'masc-idoso-img.jpg')
                }
            } else if (sexEscolhido[1].checked) {
                gen = 'Mulher'
                if (idade >=0 && idade < 10) {
                    // Criança
                    img.setAttribute('src', 'fem-bebe-img.jpg')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'fem-jovem-img.jpg')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'fem-adulto-img.jpg')
                } else {
                    // idoso
                    img.setAttribute('src', 'fem-idosa-img.jpg')
                }
            }
            img.style.borderRadius = '50%'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
            res.appendChild(img)
        }
}