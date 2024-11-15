const button = document.querySelector('.btn');
        
        
button.addEventListener('click', () => {
    const form = document.querySelector('form');
    const inputEmail = document.querySelector('#email').value;
    //Expressão para validar um email;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //verifica se o email é valido ou não.
    if(regex.test(inputEmail)){
        alert('O email digitado é válido.');

    }else{
        alert("[ERRO!], O email digitado não é válido!");
    }
})
