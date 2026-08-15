 // Endereço da nossa API
const URL_API = "http://localhost:8080/gatinhos";


// ==========================================
// 1. GET - BUSCAR
// ==========================================

async function buscarGato() {

    // Faz uma requisição para o Spring Boot
    const resposta = await fetch(URL_API);

    // Pega a resposta e transforma em JSON
    const dados = await resposta.json();

    // Mostra os dados na tela
    mostrarNaTela(dados);


    // Pega a tabela do HTML
    const tabela = document.querySelector("tbody");

    // Limpa a tabela
    tabela.innerHTML = "";


    // Percorre os gatos recebidos
    for (let gato of dados) {

        // Cria uma nova linha
        const linha = document.createElement("tr");


        // Coloca os dados do gato na linha
        linha.innerHTML = `
            <td>${gato.id}</td>
            <td>${gato.nome}</td>
            <td>${gato.raca}</td>
            <td>${gato.cor}</td>
            <td>${gato.idade}</td>
        `;


        // Coloca a linha dentro da tabela
        tabela.appendChild(linha);
    }
}


// ==========================================
// 2. POST - CADASTRAR
// ==========================================

async function cadastrarGATO() {

    const nome = document.getElementById("inputNome").value;

    const raca = document.getElementById("inputRaca").value;

    const cor = document.getElementById("inputCor").value;

    const idade = document.getElementById("inputIdade").value;


    // Cria o objeto gato
    const gato = {

        nome: nome,

        raca: raca,

        cor: cor,

        idade: idade
    };


    // Envia o gato para o Spring Boot
    const resposta = await fetch(URL_API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(gato)
    });


    // Pega a resposta do Spring Boot
    const dados = await resposta.json();


    // Mostra a resposta na tela
    mostrarNaTela(dados);


    // Atualiza a tabela
    buscarGato();
}


// ==========================================
// 3. GET POR ID
// ==========================================

async function gatoPorId() {

    // Pega o ID digitado
    const id = document.getElementById("inputId").value;


    // Monta o endereço usando o ID
    const resposta = await fetch(URL_API + "/" + id);


    // Transforma a resposta em JSON
    const gato = await resposta.json();


    // Mostra o gato na tela
    mostrarNaTela(gato);


    // Pega a tabela
    const tabela = document.querySelector("tbody");


    // Limpa a tabela
    tabela.innerHTML = "";


    // Cria uma linha
    const linha = document.createElement("tr");


    // Coloca os dados do gato na linha
    linha.innerHTML = `
        <td>${gato.id}</td>
        <td>${gato.nome}</td>
        <td>${gato.raca}</td>
        <td>${gato.cor}</td>
        <td>${gato.idade}</td>
    `;


    // Coloca a linha na tabela
    tabela.appendChild(linha);
}


// ==========================================
// 4. PUT - ATUALIZAR
// ==========================================

async function gatoAtualizar() {

    const id = document.getElementById("inputId").value;

    const nome = document.getElementById("inputNome").value;

    const raca = document.getElementById("inputRaca").value;

    const cor = document.getElementById("inputCor").value;

    const idade = document.getElementById("inputIdade").value;


    // Cria o objeto com os dados atualizados
    const gato = {

        nome: nome,

        raca: raca,

        cor: cor,

        idade: idade
    };


    // Envia os dados para o Spring Boot
    const resposta = await fetch(URL_API + "/" + id, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(gato)
    });


    // Pega a resposta
    const dados = await resposta.json();


    // Mostra a resposta
    mostrarNaTela(dados);


    // Atualiza a tabela
    buscarGato();
}


// ==========================================
// 5. DELETE - EXCLUIR
// ==========================================

async function GatoExcluir() {

    // Pega o ID digitado
    const id = document.getElementById("inputId").value;


    // Envia a requisição DELETE
    const resposta = await fetch(URL_API + "/" + id, {

        method: "DELETE"
    });


    // O DELETE retorna uma mensagem de texto
    const mensagem = await resposta.text();


    // Mostra a mensagem na tela
    document.getElementById("telaResposta").innerText = mensagem;


    // Atualiza a tabela
    buscarGato();
}


// ==========================================
// 6. GET - GATO ALEATÓRIO
// ==========================================

async function buscarGatoAleatorio() {

    // Faz a requisição para o nosso Spring Boot
    const resposta = await fetch(URL_API + "/aleatorio");


    // Recebe a lista de gatos
    const gatos = await resposta.json();


    // Pega o primeiro gato da lista
    const gato = gatos[0];


    // Pega o espaço onde vamos mostrar o gato
    const resultado = document.getElementById("resultadoGato");


    // Mostra o gato na página
    resultado.innerHTML = `
        <h5>🐱 Gato aleatório</h5>

        <img 
            src="${gato.url}" 
            alt="Gato aleatório"
            width="300"
        >
    `;
}