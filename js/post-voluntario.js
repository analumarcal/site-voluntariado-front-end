const btn = document.querySelector('#cadastrar');

btn.addEventListener('click', () => {
    const voluntario = getDadosForm();
    enviarDadosParaAPI(voluntario);
    console.log('Voluntário cadastrado com sucesso!')
    document.getElementById('resposta').innerHTML = `<p>Voluntário cadastrado com sucesso!</p>`
})

function getDadosForm() {
    const inputNome = document.querySelector('#nome');
    const inputSobrenome = document.querySelector('#sobrenome');
    const inputNomeSocial = document.querySelector('#nomeSocial');
    const inputIdade = document.querySelector('#idade');
    const inputArea = document.querySelector('#area');
    const inputEstado = document.querySelector('#estado');
    const inputCidade = document.querySelector('#cidade');
    const inputSobre = document.querySelector('#sobre');

    const voluntario = {
        nome: inputNome.value,
        sobrenome: inputSobrenome.value,
        nomeSocial: inputNomeSocial.value,
        idade: inputIdade.value,
        area: inputArea.value,
        estado: inputEstado.value,
        cidade: inputCidade.value,
        sobre: inputSobre.value
    }
    return voluntario;
}

async function enviarDadosParaAPI(voluntario) {
    const resposta = await fetch('https://juntos-back-end.onrender.com/voluntarios', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(voluntario)
    });
    try {
        if (resposta.status === 201) {
            limparCampos();
        } else {
            console.log('Erro ao cadastrar voluntário.')
        }
    }
    catch(e) {
        console.error(e);
    }
}

function limparCampos(){
    document.querySelector('#nome').value = '';
    document.querySelector('#sobrenome').value = '';
    document.querySelector('#nomeSocial').value = '';
    document.querySelector('#idade').value = '';
    document.querySelector('#area').value = '';
    document.querySelector('#estado').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#sobre').value = '';
}