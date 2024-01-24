document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault()
        let numeroMax = document.getElementById('numero-maximo').value
        numeroMax = parseInt(numeroMax)

        let numeroAleatorio = Math.random() * numeroMax
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.getElementsByClassName('resultado')[0].style.display = 'block'
    })
})