$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, insira o seu nome',
            email: 'por favor, insira um email válido',
            mensagem: 'este campo é obrigatório'
        }
    })

    function resizeTextarea() {
        var textarea = $('#mensagem');
        textarea.height(0);
        textarea.height(textarea.prop('scrollHeight'));
    }

    $('#mensagem').on('input', function() {
        resizeTextarea();
    });

    resizeTextarea();
})
