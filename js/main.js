$(document).ready(function() {
    //Aplicar a máscara em relação ao input[radio] marcado
    function atualizarMask() {
        let opcaoRadio = $("input[name='opcao']:checked").val();
        let mask = opcaoRadio === "celular" ? '(00) 00000-0000' : '(00) 0000-0000';

        $("#telefone").mask(mask);
    }

    atualizarMask();

    //Atualizar a máscara ao marcar outro [radio]
    $("input[name='opcao']").change(function() {
        atualizarMask();
    });

    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            cpf: 'Por favor, insira um CPF válido.',
            email: 'Por favor, insira um e-mail válido.',
            telefone: 'Por favor, insira um telefone válido.',
            address: 'Por favor, insira um endereço válido.',
        },        
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos incorretos`)
            }
        }
    })
});
