// Selecionando a tabela de pacientes
var tabela = document.querySelector("#tabela-pacientes");

// Adicionando um evento de escuta do duplo clique
tabela.addEventListener("dblclick", function(event){
    
    // Se a target do elemento clicado for TD será excluído da tabela
    if(event.target.tagName == "TD") {
       
        event.target.parentNode.classList.add("fadeOut");
    
        // Setando um tempo de espera para executar a animação de exclusão da linha
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
});