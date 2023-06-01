//OBS: os "return"s servem para terminar a função naquele momento e não executar o resto. É tipo o "break"
//
//
//checa se a string é vazia e se contem caracteres nao alfabeticos
function validarNome(){
    var nome = document.getElementById("nome").value;
    
    //checa se a string é vazia 
    if (nome.length == 0){
        alert("Informe o nome");
        return;
    }

    //checa se a string contém apenas letras maiusculas ou minusculas
    for (i = 0, len = nome.length; i < len; i++){
        char = nome.charCodeAt(i);

        if (!(char > 64 && char < 91) && // (A-Z)
            !(char > 96 && char < 123)){ // (a-z) 

            alert("Caracteres inválidos");
            return;
        }
    }

    return;
}

//requer ter texto dos dois lados do @
function validarEmail(){
    var email = document.getElementById("email").value;
    var emailStart, emailEnd;
    var hasArroba = false;

    if (email.length == 0){
        alert("Informe o email");
        return;
    }

    //verifica se cada elemento da string digitada é um arroba ou nao
    for (i = 0, len = email.length; i < len; i++){
        char = email.charCodeAt(i);

        if (char == 64){ //se existir um @ na string (64 == @ em ASCII)
            hasArroba = true; 
        }
    }

    //se tem arroba, verifica se os dois lados do arroba estao preenchidos
    if (hasArroba){
        emailStart, emailEnd = email.split("@");

        if (emailStart.length == 0 || emailEnd.length == 0){
            alert("Email inválido, um dos lados do @ está vazio.");
            return;
        }

        return;
    }

    //se o codigo chegou até aqui, entao significa que a string não tem arroba
    alert("Email inválido, não há @");
    return;
}

//tem q ter 11 numeros
//limpar a string para ser apenas numeros puros.
function validarTelefone(){
    var telefone = document.getElementById("telefone").value;

    if (telefone.length == 0){
        alert("Informe o telefone");
        return;
    }

 
    if (telefone.length != 11){
        alert("Telefone inválido");
        return;
    }

    return;
}

//roda todas as validações
function validar(){
    validarNome();
    validarEmail();
    validarTelefone();
}

