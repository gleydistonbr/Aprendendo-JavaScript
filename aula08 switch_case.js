let permissao;
 permissao = 0;

    switch(permissao){
        case 1:
            console.log('Usuario Comum');
            break;
        case 2:
            console.log('Usuario Gerente');
            break;
        case 3:
            console.log('Usuario Diretor');
            break;
        case 0:
            console.log('Encerrar');
            break;
        default:
            console.log('Usuario não encontrado');
            break;
    }
