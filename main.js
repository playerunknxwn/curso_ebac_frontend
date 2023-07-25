$(document).ready(function () {
    const form = $('#form-add-tarefas')

    form.submit(function (e) {
        e.preventDefault()

        const inputTarefa = $('#input-tarefas').val()
        const novoItemli = $('<li style="display: none"></li>').text(inputTarefa)

        $(novoItemli).appendTo('ul')
        $(novoItemli).fadeIn(500)
        $('#input-tarefas').val('')

        $(novoItemli).click(function() {
            $(novoItemli).css('text-decoration', 'line-through')
        })
    })
})
