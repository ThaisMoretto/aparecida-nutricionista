// Selecionando o botão "Adicionar Pacientees"
var botaoAdicionar = document.querySelector("#buscar-pacientes");

// Adicionando o evendo de escuta de clique
botaoAdicionar.addEventListener("click", function(){
    // Nova requisição de http
    var xhr = new XMLHttpRequest();
    
    // Abertura da requisição informando o método e o endereço
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Adicionando o evendo de escuta de termino de carregamento (quando o conteúdo do endereço for lido por completo)
    xhr.addEventListener("load", function(){
        
        // Definição de variável para exibição de erro caso true
        var erroAjax = document.querySelector("#erro-ajax");

        // Se o status for 200 é sucesso
        if(xhr.status == 200){
            
            erroAjax.classList.add("invisivel");

            // Passa cada objeto do JSON para um array
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            // Para cada paciente do array vai ser chamada a função adicionaPacienteNaTabela()
            pacientes.forEach(function (paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    // Envio da requisição
    xhr.send();

});