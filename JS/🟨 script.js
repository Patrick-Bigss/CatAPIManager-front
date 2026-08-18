const URL_API = "http://localhost:8080/gatinhos";

function mostrarNaTela(dados) {

    const tela = document.getElementById("telaResposta");

    tela.innerText = JSON.stringify(dados, null, 4);
}

// 1. GET - BUSCAR

async function buscarGato() {

    const resposta = await fetch(URL_API);

    const dados = await resposta.json();

    mostrarNaTela(dados);


    const tabela = document.querySelector("tbody");

    tabela.innerHTML = "";


    for (let gato of dados) {

        const linha = document.createElement("tr");


        linha.innerHTML = `
            <td>${gato.id}</td>
            <td>${gato.nome}</td>
            <td>${gato.raca}</td>
            <td>${gato.cor}</td>
            <td>${gato.idade}</td>
        `;


        tabela.appendChild(linha);
    }
}


// 2. POST

async function cadastrarGATO() {

    const nome = document.getElementById("inputNome").value;

    const raca = document.getElementById("inputRaca").value;

    const cor = document.getElementById("inputCor").value;

    const idade = Number(document.getElementById("inputIdade").value);

    const gato = {

        nome: nome,

        raca: raca,

        cor: cor,

        idade: idade
    };


    const resposta = await fetch(URL_API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(gato)
    });


    const dados = await resposta.json();


    mostrarNaTela(dados);


    buscarGato();
}


// 3. GET POR ID

async function gatoPorId() {

    const id = document.getElementById("inputId").value;


    const resposta = await fetch(URL_API + "/" + id);


    const gato = await resposta.json();


    mostrarNaTela(gato);


    const tabela = document.querySelector("tbody");


    tabela.innerHTML = "";


    const linha = document.createElement("tr");


    linha.innerHTML = `
        <td>${gato.id}</td>
        <td>${gato.nome}</td>
        <td>${gato.raca}</td>
        <td>${gato.cor}</td>
        <td>${gato.idade}</td>
    `;


    tabela.appendChild(linha);
}


// 4. PUT 

async function gatoAtualizar() {

    const id = document.getElementById("inputId").value;

    const nome = document.getElementById("inputNome").value;

    const raca = document.getElementById("inputRaca").value;

    const cor = document.getElementById("inputCor").value;

    const idade = Number(document.getElementById("inputIdade").value);

    const gato = {

        nome: nome,

        raca: raca,

        cor: cor,

        idade: idade
    };


    const resposta = await fetch(URL_API + "/" + id, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(gato)
    });


    const dados = await resposta.json();


    mostrarNaTela(dados);


    buscarGato();
}



// 5. DELETE - 

async function GatoExcluir() {

    const id = document.getElementById("inputId").value;


    const resposta = await fetch(URL_API + "/" + id, {

        method: "DELETE"
    });


    const mensagem = await resposta.text();


    document.getElementById("telaResposta").innerText = mensagem;

    buscarGato();
}



// 6. GET

async function buscarGatoAleatorio() {

    const resposta = await fetch(
        URL_API + "/aleatorio"
    );

    const gatos = await resposta.json();

    const gato = gatos[0];

    const resultado =
        document.getElementById("resultadoGato");


    resultado.innerHTML = `

        <div class="card mt-3">

            <div class="card-body">

                <h5 class="card-title">
                    🐱 Gato aleatório
                </h5>

                <img 
                    src="${gato.url}" 
                    alt="Gato aleatório"
                    class="img-fluid rounded"
                    style="max-width: 400px;"
                >

            </div>

        </div>

    `;
}