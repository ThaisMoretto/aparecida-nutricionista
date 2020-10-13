// Selecionando o Id do campo de input para o filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

// Adicionando um evendo de escuta que executará a função anônima ao começar a digitar nele
campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    // Selecionando a tabela pacientes para o filtro realizar a busca
    var pacientes = document.querySelectorAll(".paciente");

    // Caso o tamanho do campo input for maior que 0
    if(this.value.length > 0){
        
        // for para pegar o conteúdo de texto do info-nome de todas as linhas da tabela
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            // Declaração da Regex para o valor inputado e definição do case insensitive para realização da busca
            var expressao = new RegExp(this.value, "i");

            // Testa se o valor imputado é igual ao nome do paciente
            if(!expressao.test(nome)){
                // Adiciona a classe "invisivel"
                paciente.classList.add("invisivel");
            } else {
                // Remove a classe "invisivel"
                paciente.classList.remove("invisivel");
            }
        }

    } else {
        // Caso não haja valor imputado, a classe "invisível" será removida e as linhas serão exibidas
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});