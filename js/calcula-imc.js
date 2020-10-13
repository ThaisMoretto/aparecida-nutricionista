// Estamos pegando o elemento do DOM
var titulo = document.querySelector(".titulo");

// Seleciona todas as classes ".paciente" da página
var pacientes = document.querySelectorAll(".paciente");

// for para calcular o IMC de cada paciente
for(var i = 0; i < pacientes.length; i++) {
    
    // Definimos que a variável paciente vai ser pacientes[i] para nao ter que alterar todo o código com o índice correspondente
    var paciente = pacientes[i];
    var cor = "lightcoral";
    
    // Selecionamos a td do peso e depois pegamos seu conteúdo de texto
    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    // Selecionamos a td da altura e depois pegamos seu conteúdo de texto
    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    // Para alterar o valor do IMC com o valor calculado, selecionamos a td e alteramos seu conteúdo de texto dentro do if
    var infoImc = paciente.querySelector(".info-imc");

    // Variáveis que serão preenchidas com o retorno das funcções validaPeso(peso) e validaAltura(altura)
    var pesoEhValido = validaPeso(peso); 
    var alturaEhValida = validaAltura(altura);

    // Validação do peso informado na tentativa de criação de novo paciente
    if(!pesoEhValido) {
        //pesoEhValido = false;
        infoImc.textContent = "Peso inválido!";
        //Cria uma classe para aplicar o estilo no CSS
        paciente.classList.add("paciente-invalido");
    }

    // Validação da altura informada na tentativa de criação de novo p
    if(!alturaEhValida) {
        //alturaEhValida = false;
        infoImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
        // Chamada para a função que irá calcular o IMC do paciente
        var imc = calculaImc(peso, altura);

        // InfoImc é preenchido com o valor do IMC calculado
        infoImc.textContent = imc;
    }
}

// Função que irá receber o peso do paciente e verificar se é válido
function validaPeso(peso) {
    if(peso >=0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

// Função que irá receber a altura do paciente e verificar se é válida
function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

// Função que irá receber o peso e a altura do paciente e calcular o IMC
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


