//receber os elementos, para melhor manipular no Js
let campo1 = document.querySelector('input#input1')
let campo2 = document.querySelector('input#input2')
const errorMessage = document.querySelector('.error')
const successMessage = document.querySelector('.success')
const form = document.querySelector('.formcomp')

//não atualizar a page e procedimentos a seguir
form.addEventListener('submit', function(e) {
    e.preventDefault()

    //verificar se ta recebendo os valores corretamente
    console.log(campo2.value, '>', campo1.value)

    //facilitar as coisas e converter o .value pra Integer, pra ter certeza q number é number
    let valueCampo1 = parseInt(campo1.value)
    let valueCampo2 = parseInt(campo2.value)

    function compararAB(input1, input2) {
        const bMaiorA = input2 > input1
        return bMaiorA
    }

    let resultadoAB = compararAB(valueCampo1, valueCampo2)
    //dar aquela averiguada no boolean
    console.log(resultadoAB)
    
    if (resultadoAB) {
        successMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'block'
    }
})

//reset all
form.addEventListener('reset', function() {
    successMessage.style.display = 'none'
    errorMessage.style.display = 'none'
})