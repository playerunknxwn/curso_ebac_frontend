//receber os elementos em const/var
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const error = document.querySelector('.error')
const success = document.querySelector('.success')

//não atualizar no submit
const formcalc = document.querySelector('.formcalc')
//event listener
formcalc.addEventListener('submit', function(e) { 
    e.preventDefault()

    function verMaior (a, b) {
        const bEMaior = b > a
        return bEMaior
    }
    //bEMaior retorna true ou false da função

    functionValue = verMaior(input1.value, input2.value)
    //functionValue vai carregar o valor boolean pra if

    if (functionValue) {
        success.style.display = 'block'
    } else {
        error.style.display = 'block'
    }
})

//reset all
formcalc.addEventListener('reset', function() {
    error.style.display = 'none'
    success.style.display = 'none'
})