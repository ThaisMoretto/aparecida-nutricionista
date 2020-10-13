// Pegando o ID do botão de adicionar paciente do Form e atribuindo a variável botaoAdicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adicionando o addEventListener a variável botaoAdicionar que executará a função anônima quando o botão for clicado ("click")
botaoAdicionar.addEventListener("click", function(event) {
   
    // Recebe o parâmetro event e chama a função que previne o comportamento padrão do elemento (tentar enviar os dados do form)
    event.preventDefault();

    // Pega o form para poder trabalhar com todos seus campos
    var form = document.querySelector("#form-adiciona");

    // Chamada para a FUNCTION que obtém os dados do paciente dos inputs realizados no form
    var paciente = obtemPacienteDoFormulario(form); 

    //  Chamada para a FUNCTION que irá validar se os dados do paciente são válidos. Envia como parâmetro o objeto "paciente" obtido do form
    var erros = validaPaciente(paciente);
    console.log(erros);

    // Ao receber o array de erros, vai testar se esse array é maior que 0, isso significa que existem erros
    if(erros.length > 0){

        // Cahamada para a FUNCTION exibeMensagensDeErro() passando como parâmetro o array de erros 
        exibeMensagensDeErro(erros);
        return;
    }   

    // Chamada para a FUNCTION que irá realizar a adição do paciente na tabela. Envia como parâmetro "paciente"
    adicionaPacienteNaTabela(paciente);

    // Apaga o conteúdo dos campos do form para uma nova inclusão
    form.reset();
    
    // Apaga as mensagens de erro sempre eu o botão for clicado, assim só aparecerão os erros que realmente existirem a cada interação do usuário com o botão
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

// Função que irá obter os dados do paciente imputado no form. Recebe como parâmetro o "form"
function obtemPacienteDoFormulario(form) {
    
    // Extrai informações do paciente do form colocando em um objeto PACIENTE com suas propriedade/características
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        // Chamada para a FUNCTION que irá calcular o IMC do paciente. Passa os parâmetros "peso" e "altura"
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    // Retorna o objeto "paciente" com todas suas características
    return paciente;
}

// Função que irá receber como parâmetro o objeto "paciente" e irá verificar se os dados imputados são válidos
function validaPaciente(paciente) {
    
    // Inicia um array de erros vazio, uma vez que podemos ter vários erros e todos deverão ser exibidos ao usuário
    var erros = [];

    // Verifica se o nome foi preenchido
    if(paciente.nome.length == 0){
        erros.push("O Nome não pode estar em branco!");
    }

    // Verifica se o peso informado é válido
    if(!validaPeso(paciente.peso)){
        erros.push("O Peso é inválido");
    }

    // Verifica se a altura informada é válida
    if(!validaAltura(paciente.altura)){
        erros.push("A Altura é inválida!");
    }

    // Verifica se o percentual de gordura informado é válido
    if(paciente.gordura.length == 0){
        erros.push("O % de gordura não pode estar em branco!");
    }

    // Verifica se o peso for preenchido
    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco!");
    }

    // Verifica se a altura foi preenchida
    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco!");
    }

    // Retorna o array com os erros ou o array vazio
    return erros;
}

// Função que irá receber o array de erros e exibí-los na tela
function exibeMensagensDeErro(erros){
    
    // Seleção do ul em que serão inseridos li para cada erro
    var ul = document.querySelector("#mensagens-erro");

    // ul inicia com nenhum conteúdo
    ul.innerHTML = "";

    // Para cada erro, um li será criado e recebera o erro como appendChild do ul
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Função que irá receber o "paciente" como parâmetro e inserir suas informações na tabela
function adicionaPacienteNaTabela(paciente){
    
    // Chamada para a FUNCTION que criará a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    // Após criada a tr e a td, adiciona o paciente na tabela com appendChild
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

// Função que receberá como parâmetro o "paciente" e irá criar as tr e chamar outra Function para criar as td
function montaTr(paciente) {
    
    // Cria um novo elemento tr no corpo da página e adiciona a classe "paciente" na tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
   
    // Para cada tr será adicionado um filho que é uma td que será criada pela function montaTd()
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    // Retorna cada tr criada para ser adicionada na tabela
    return pacienteTr;
}

// Função que receberá como parâmetro o "dado" e a "classe" e criará as td
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    // Retorna a td criada para a function montaTr()
    return td;
}



