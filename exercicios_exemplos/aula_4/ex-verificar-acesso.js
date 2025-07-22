let usuarioLogado = true;
let usuarioAcesso = false;

function verificarAcesso(login,Acesso){
    return usuarioLogado && usuarioAcesso ? 'Acesso liberado' : 'Acesso negado';
} 

console.log(verificarAcesso(usuarioLogado, usuarioAcesso));

usuarioLogado = true;
usuarioAcesso = true;

console.log(verificarAcesso(usuarioLogado, usuarioAcesso));
