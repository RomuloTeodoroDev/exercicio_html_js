const form = document.getElementById('form-count');
const maiorQ = document.getElementById('table');
const campoA = document.getElementById('camp-a');
const campoB = document.getElementById('camp-b');
formEvalido = false;

function validaCampo(num){
    if (num = parseFloat(campoA.value) < parseFloat(campoB.value)){
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
        
    const mensagemSucesso = 'O campo B é maior que A, Parabéns!';
    const mensagemErro = 'O campo B tem que ser maior que A, tente de novo!';
    
        formEvalido = validaCampo(form.value)
    
    if (formEvalido) { 
        campoB.style.border = '1px solid green';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
    } else {
        campoA.style.border = '1px solid red';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEvalido = validaCampo(e.target.value);

    if (formEvalido) { 
        campoB.classList.add('success');
        document.querySelector('.success-message').style.display = 'block';        
    } else {
        campoB.classList.remove('success');
        document.querySelector('.success-message').style.display = 'none';
    }
});

campoA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEvalido = validaCampo(e.target.value);

    if (formEvalido) { 
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';        
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});


