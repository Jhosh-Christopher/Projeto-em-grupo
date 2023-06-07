//OBS: os "return"s servem para terminar a função naquele momento e não executar o resto. É tipo o "break"
//
//
//checa se a string é vazia e se contem caracteres nao alfabeticos
function validarNome(nome){
    //checa se a string é vazia 
    if (nome.length == 0){
        alert("Informe o nome");
        return;
    }

    //checa se a string contém apenas letras maiusculas ou minusculas (usando a tabela ASCII)
    for (i = 0; i < nome.length; i++){
        char = nome.charCodeAt(i);

        if ((char != 32) &&              // (espaço) 
            !(char > 64 && char < 91) && // (A-Z)
            !(char > 96 && char < 123)){ // (a-z))                   
            alert("Nome inválido, apenas letras");
            return;
        }
    }
}

//valida se tem texto dos dois lados do @
function validarEmail(email){
    var temArroba = false;

    if (email.length == 0){
        alert("Informe o email");
        return;
    }

    //verifica se cada elemento da string digitada é um arroba ou nao
    for (i = 0; i < email.length; i++){
        char = email.charCodeAt(i);

        if (char == 64){ //se existir um @ na string (64 == @ em ASCII)
            temArroba = true; 
            break;
        }
    }

    //se tem arroba, verifica se os dois lados do arroba estao preenchidos
    if (temArroba){
        var emailSeparado = email.split("@"); //split retorna um array!
        
        if (emailSeparado[0].length == 0 || emailSeparado[1].length == 0){
            alert("Email inválido, um dos lados do @ está vazio.");
        }

        return;
    }

    //se o codigo chegou até aqui, entao significa que a string não tem arroba
    alert("Email inválido, não há @");
    return;
}
//tem q ter 11 numeros
//a string tem q ser apenas numeros puros
function validarTelefone(telefone){
    if (telefone.length == 0){
        alert("Informe o telefone");
        return;
    }

    if (telefone.length != 11){
        alert("Telefone inválido");
        return;
    }

    for (i = 0; i < telefone.length; i++){
        char = telefone.charCodeAt(i);

        if (!(char > 47 && char < 57)){ // (0-9)
            alert("Telefone inválido, apenas números");
            return;
        }
    }
}

//roda todas as validações
function validarFormulario(){
    var nome = document.getElementById("nome").value;
    validarNome(nome);

    var email = document.getElementById("email").value;
    validarEmail(email);

    var telefone = document.getElementById("telefone").value;
    validarTelefone(telefone);
}

