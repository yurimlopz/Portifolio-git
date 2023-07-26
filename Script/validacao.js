export function valida(input) {
    const tipoDeInput = input.dataset.tipo

     if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }


    if (input.validity.valid){
        input.parentElement.classList.remove('inputContato__invalido');
        input.parentElement.querySelector('.inputMensagem__erro').innerHTML = '';
    }
    else{
            input.parentElement.classList.add('inputContato__invalido');
            input.parentElement.querySelector('.inputMensagem__erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}
    const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
    ];

    const mensagensDeErro = {
        nome: {
            valueMissing: 'O campo de nome não pode estar vazio.'
        },
        email: {
            valueMissing: 'O campo de email não pode estar vazio.',
            typeMismatch: 'O email digitado não é válido.'
        },
        assunto: {
            valueMissing: 'O campo de assunto não pode estar vazio'
        },
        mensagem: {
            valueMissing: 'O campo de mensagem não pode estar vazio'
        }

    }

    function mostraMensagemDeErro(tipoDeInput, input) {
        let mensagem = ''
        tiposDeErro.forEach(erro => {
            if (input.validity[erro]) {
                mensagem = mensagensDeErro[tipoDeInput][erro]
            }
        })

        return mensagem
    }