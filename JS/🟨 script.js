const URL_API = "http://localhost:8080/gatinhos";


// MOSTRAR RESPOSTA NA TELA

function mostrarNaTela(dados) {

    const tela = document.getElementById("telaResposta");

    tela.innerText = JSON.stringify(dados, null, 4);
}


// 1. GET - BUSCAR TODOS

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
            <td>${gato.name}</td>
            <td>${gato.temperament}</td>
            <td>${gato.origin}</td>
            <td>${gato.description}</td>
            <td>
                <img
                    src="${gato.url}"
                    alt="${gato.name}"
                    width="100"
                >
            </td>
        `;

        tabela.appendChild(linha);
    }
}


// 2. POST - CADASTRAR

async function cadastrarGATO() {

    const name =
        document.getElementById("inputName").value;

    const temperament =
        document.getElementById("inputTemperament").value;

    const origin =
        document.getElementById("inputOrigin").value;

    const description =
        document.getElementById("inputDescription").value;


    const gato = {

        name: name,

        temperament: temperament,

        origin: origin,

        description: description
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

    const id =
        document.getElementById("inputId").value;

    const resposta =
        await fetch(URL_API + "/" + id);

    const gato =
        await resposta.json();

    mostrarNaTela(gato);

    const tabela =
        document.querySelector("tbody");

    tabela.innerHTML = "";

    const linha =
        document.createElement("tr");

    linha.innerHTML = `
        <td>${gato.id}</td>
        <td>${gato.name}</td>
        <td>${gato.temperament}</td>
        <td>${gato.origin}</td>
        <td>${gato.description}</td>
        <td>
            <img
                src="${gato.url}"
                alt="${gato.name}"
                width="100"
            >
        </td>
    `;

    tabela.appendChild(linha);
}


// 4. PUT - ATUALIZAR

async function gatoAtualizar() {

    const id =
        document.getElementById("inputId").value;

    const name =
        document.getElementById("inputName").value;

    const temperament =
        document.getElementById("inputTemperament").value;

    const origin =
        document.getElementById("inputOrigin").value;

    const description =
        document.getElementById("inputDescription").value;


    const gato = {

        name: name,

        temperament: temperament,

        origin: origin,

        description: description
    };


    const resposta =
        await fetch(URL_API + "/" + id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(gato)
        });


    const dados =
        await resposta.json();

    mostrarNaTela(dados);

    buscarGato();
}


// 5. DELETE

async function GatoExcluir() {

    const id =
        document.getElementById("inputId").value;

    const resposta =
        await fetch(URL_API + "/" + id, {

            method: "DELETE"
        });

    const mensagem =
        await resposta.text();

    document.getElementById("telaResposta").innerText =
        mensagem;

    buscarGato();
}


// 6. GET - GATO ALEATÓRIO

async function buscarGatoAleatorio() {

    const resposta =
        await fetch(URL_API + "/aleatorio");

    const gato =
        await resposta.json();


    mostrarNaTela(gato);


    const resultado =
        document.getElementById("resultadoGato");


    resultado.innerHTML = `

        <div class="card mt-3">

            <div class="card-body">

                <h5 class="card-title">
                    🐱 ${gato.name}
                </h5>

                <img
                    src="${gato.url}"
                    alt="${gato.name}"
                    class="img-fluid rounded"
                    style="max-width: 400px;"
                >

                <p class="mt-3">
                    <strong>Temperamento:</strong>
                    ${gato.temperament}
                </p>

                <p>
                    <strong>Origem:</strong>
                    ${gato.origin}
                </p>

                <p>
                    <strong>Descrição:</strong>
                    ${gato.description}
                </p>

            </div>

        </div>
    `;
}