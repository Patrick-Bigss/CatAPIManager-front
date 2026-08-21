const URL_API = "http://localhost:8080/gatinhos";


const telaResposta =
    document.getElementById("telaResposta");

const tabelaGatos =
    document.getElementById("tabelaGatos");

function mostrarMensagem(mensagem, tipo = "success") {

    telaResposta.innerHTML = `

        <div class="alert alert-${tipo}" role="alert">

            ${mensagem}

        </div>

    `;

}

function pegarDadosFormulario() {

    return {

        catApiId:
            document.getElementById("catApiId").value.trim(),

        name:
            document.getElementById("name").value.trim(),

        speciesId:
            document.getElementById("speciesId").value.trim(),

        lifeSpan:
            document.getElementById("lifeSpan").value.trim(),

        temperament:
            document.getElementById("temperament").value.trim(),

        origin:
            document.getElementById("origin").value.trim(),

        countryCodes:
            document.getElementById("countryCodes").value.trim(),

        countryCode:
            document.getElementById("countryCode").value.trim(),

        description:
            document.getElementById("description").value.trim(),

        bredFor:
            document.getElementById("bredFor").value.trim(),

        perfectFor:
            document.getElementById("perfectFor").value.trim(),

        breedGroup:
            document.getElementById("breedGroup").value.trim(),

        history:
            document.getElementById("history").value.trim(),

        referenceImageId:
            document.getElementById("referenceImageId").value.trim(),

        weight:
            document.getElementById("weight").value.trim(),

        height:
            document.getElementById("height").value.trim(),

        image:
            document.getElementById("image").value.trim()

    };

}


async function buscarGato() {

    console.log("GET /gatinhos");


    try {

        const resposta =
            await fetch(URL_API);


        if (!resposta.ok) {

            throw new Error(
                "Erro HTTP: " +
                resposta.status
            );

        }


        const gatos =
            await resposta.json();


        console.log(
            "Gatos do MySQL:",
            gatos
        );


        mostrarGatosDoBanco(gatos);


        mostrarMensagem(
            "Gatinhos do Banco carregados com sucesso!",
            "success"
        );


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Erro ao buscar gatos: " +
            erro.message,
            "danger"
        );

    }

}

async function salvarGato() {

    console.log("POST /gatinhos");


    const gato =
        pegarDadosFormulario();


    if (!gato.catApiId) {

        mostrarMensagem(
            "Informe o ID da The Cat API. Exemplo: abys",
            "warning"
        );

        return;

    }


    if (!gato.name) {

        mostrarMensagem(
            "Informe o nome do gatinho.",
            "warning"
        );

        return;

    }


    try {

        const resposta =
            await fetch(
                URL_API,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(gato)

                }
            );


        if (!resposta.ok) {

            const erroTexto =
                await resposta.text();

            throw new Error(
                "HTTP " +
                resposta.status +
                ": " +
                erroTexto
            );

        }


        const gatoSalvo =
            await resposta.json();


        console.log(
            "Gatinho salvo no Banco:",
            gatoSalvo
        );


        mostrarMensagem(
            "Raça " +
            gatoSalvo.name +
            " salva no Banco com sucesso! " +
            "ID da API: " +
            gatoSalvo.catApiId,
            "success"
        );


        limparFormulario();


        buscarGato();


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Erro ao salvar gatinho: " +
            erro.message,
            "danger"
        );

    }

}


async function editarGato() {

    console.log(
        "PUT /gatinhos/api/{catApiId}"
    );


    const catApiId =
        document
            .getElementById("catApiId")
            .value
            .trim();


    if (!catApiId) {

        mostrarMensagem(
            "Informe o ID da The Cat API. Exemplo: abys",
            "warning"
        );

        return;

    }


    const gato =
        pegarDadosFormulario();


    try {

        const resposta =
            await fetch(
                URL_API +
                "/api/" +
                encodeURIComponent(catApiId),
                {

                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(gato)

                }
            );


        if (!resposta.ok) {

            const erroTexto =
                await resposta.text();

            throw new Error(
                "HTTP " +
                resposta.status +
                ": " +
                erroTexto
            );

        }


        const gatoAtualizado =
            await resposta.json();


        console.log(
            "Gatinho atualizado:",
            gatoAtualizado
        );


        mostrarMensagem(
            "Gatinho " +
            gatoAtualizado.name +
            " atualizado com sucesso no Banco!",
            "success"
        );


        buscarGato();


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Erro ao atualizar gatinho: " +
            erro.message,
            "danger"
        );

    }

}


async function deletarGato() {

    console.log(
        "DELETE /gatinhos/api/{catApiId}"
    );


    const catApiId =
        document
            .getElementById("catApiId")
            .value
            .trim();


    if (!catApiId) {

        mostrarMensagem(
            "Informe o ID da The Cat API. Exemplo: abys",
            "warning"
        );

        return;

    }


    const confirmar =
        confirm(
            "Tem certeza que deseja excluir a raça " +
            catApiId +
            " do seu banco?"
        );


    if (!confirmar) {

        return;

    }


    try {

        const resposta =
            await fetch(
                URL_API +
                "/api/" +
                encodeURIComponent(catApiId),
                {

                    method: "DELETE"

                }
            );


        if (!resposta.ok) {

            const erroTexto =
                await resposta.text();

            throw new Error(
                "HTTP " +
                resposta.status +
                ": " +
                erroTexto
            );

        }


        const mensagem =
            await resposta.text();


        console.log(
            mensagem
        );


        mostrarMensagem(
            mensagem,
            "success"
        );


        limparFormulario();


        buscarGato();


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Erro ao excluir gatinho: " +
            erro.message,
            "danger"
        );

    }

}

async function carregarRacas() {

    console.log(
        "GET /gatinhos/racas"
    );


    try {

        const resposta =
            await fetch(
                URL_API + "/racas"
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro HTTP: " +
                resposta.status
            );

        }


        const texto =
            await resposta.text();


        console.log(
            "Resposta da The Cat API:",
            texto
        );


        const racas =
            JSON.parse(texto);


        console.log(
            "Raças:",
            racas
        );


        mostrarRacasNaTabela(racas);


        mostrarMensagem(
            racas.length +
            " ? MEU DEUS, SÃO MUITOS GATINHOS!",
            "success"
        );


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Erro ao buscar raças: " +
            erro.message,
            "danger"
        );

    }

}


function mostrarRacasNaTabela(racas) {

    tabelaGatos.innerHTML = "";


    racas.forEach(gato => {

        let peso = "Não informado";


        if (gato.weight) {

            if (
                typeof gato.weight === "object"
            ) {

                peso = `
                    Imperial:
                    ${gato.weight.imperial || "-"}

                    <br>

                    Métrico:
                    ${gato.weight.metric || "-"}
                `;

            } else {

                peso =
                    gato.weight;

            }

        }


        let altura = "Não informado";


        if (gato.height) {

            if (
                typeof gato.height === "object"
            ) {

                altura = `
                    Imperial:
                    ${gato.height.imperial || "-"}

                    <br>

                    Métrico:
                    ${gato.height.metric || "-"}
                `;

            } else {

                altura =
                    gato.height;

            }

        }


        let imagem = "";


        if (gato.image) {

            if (
                typeof gato.image === "object"
            ) {

                imagem =
                    gato.image.url || "";

            } else {

                imagem =
                    gato.image;

            }

        }


        const linha =
            document.createElement("tr");


        linha.innerHTML = `

            <td>
                -
            </td>

            <td>
                <strong>
                    ${gato.id || "-"}
                </strong>
            </td>

            <td>
                ${gato.name || "-"}
            </td>

            <td>
                ${gato.temperament || "-"}
            </td>

            <td>
                ${gato.origin || "-"}
            </td>

            <td>
                ${gato.description || "-"}
            </td>

            <td>
                ${gato.life_span || "-"}
            </td>

            <td>
                ${peso}
            </td>

            <td>
                ${altura}
            </td>

            <td>

                ${
                    imagem

                    ?

                    `
                    <img
                        src="${imagem}"
                        alt="${gato.name || "Gato"}"
                        width="100"
                        height="80"
                        style="
                            object-fit: cover;
                            border-radius: 8px;
                        "
                    >
                    `

                    :

                    `
                    <span class="text-muted">
                        Sem imagem
                    </span>
                    `
                }

            </td>

            <td>

                <button
                    class="btn btn-sm btn-success"
                    onclick="preencherFormulario(
                        ${JSON.stringify(gato).replace(/"/g, '&quot;')}
                    )"
                >
                    ➕ Usar
                </button>

            </td>

        `;


        tabelaGatos.appendChild(linha);

    });

}


function mostrarGatosDoBanco(gatos) {

    tabelaGatos.innerHTML = "";


    if (gatos.length === 0) {

        tabelaGatos.innerHTML = `

            <tr>

                <td
                    colspan="11"
                    class="text-center text-muted py-4"
                >

                    Nenhum gatinho cadastrado no Banco.

                </td>

            </tr>

        `;

        return;

    }


    gatos.forEach(gato => {

        const linha =
            document.createElement("tr");


        linha.innerHTML = `

            <td>
                ${gato.id || "-"}
            </td>

            <td>
                <strong>
                    ${gato.catApiId || "-"}
                </strong>
            </td>

            <td>
                ${gato.name || "-"}
            </td>

            <td>
                ${gato.temperament || "-"}
            </td>

            <td>
                ${gato.origin || "-"}
            </td>

            <td>
                ${gato.description || "-"}
            </td>

            <td>
                ${gato.lifeSpan || "-"}
            </td>

            <td>
                ${gato.weight || "-"}
            </td>

            <td>
                ${gato.height || "-"}
            </td>

            <td>

                ${
                    gato.image

                    ?

                    `
                    <img
                        src="${gato.image}"
                        alt="${gato.name || "Gato"}"
                        width="100"
                        height="80"
                        style="
                            object-fit: cover;
                            border-radius: 8px;
                        "
                    >
                    `

                    :

                    `
                    <span class="text-muted">
                        Sem imagem
                    </span>
                    `
                }

            </td>

            <td>

                <button
                    class="btn btn-sm btn-warning"
                    onclick="preencherFormularioBanco(
                        ${JSON.stringify(gato).replace(/"/g, '&quot;')}
                    )"
                >
                    ✏️ Editar
                </button>

            </td>

        `;


        tabelaGatos.appendChild(linha);

    });

}
function preencherFormulario(gato) {

    document.getElementById("catApiId").value =
        gato.id || "";


    document.getElementById("name").value =
        gato.name || "";


    document.getElementById("speciesId").value =
        gato.species_id || "";


    document.getElementById("lifeSpan").value =
        gato.life_span || "";


    document.getElementById("temperament").value =
        gato.temperament || "";


    document.getElementById("origin").value =
        gato.origin || "";


    document.getElementById("countryCodes").value =
        gato.country_codes || "";


    document.getElementById("countryCode").value =
        gato.country_code || "";


    document.getElementById("description").value =
        gato.description || "";


    document.getElementById("bredFor").value =
        gato.bred_for || "";


    document.getElementById("perfectFor").value =
        gato.perfect_for || "";


    document.getElementById("breedGroup").value =
        gato.breed_group || "";


    document.getElementById("history").value =
        gato.history || "";


    document.getElementById("referenceImageId").value =
        gato.reference_image_id || "";


    if (
        gato.weight &&
        typeof gato.weight === "object"
    ) {

        document.getElementById("weight").value =
            gato.weight.metric || "";

    } else {

        document.getElementById("weight").value =
            gato.weight || "";

    }


    if (
        gato.height &&
        typeof gato.height === "object"
    ) {

        document.getElementById("height").value =
            gato.height.metric || "";

    } else {

        document.getElementById("height").value =
            gato.height || "";

    }


    if (
        gato.image &&
        typeof gato.image === "object"
    ) {

        document.getElementById("image").value =
            gato.image.url || "";

    } else {

        document.getElementById("image").value =
            gato.image || "";

    }


    mostrarMensagem(
        "Raça " +
        (gato.name || "") +
        " carregada no formulário. Agora você pode salvá-la no MySQL.",
        "info"
    );

}


function preencherFormularioBanco(gato) {

    document.getElementById("catApiId").value =
        gato.catApiId || "";


    document.getElementById("name").value =
        gato.name || "";


    document.getElementById("speciesId").value =
        gato.speciesId || "";


    document.getElementById("lifeSpan").value =
        gato.lifeSpan || "";


    document.getElementById("temperament").value =
        gato.temperament || "";


    document.getElementById("origin").value =
        gato.origin || "";


    document.getElementById("countryCodes").value =
        gato.countryCodes || "";


    document.getElementById("countryCode").value =
        gato.countryCode || "";


    document.getElementById("description").value =
        gato.description || "";


    document.getElementById("bredFor").value =
        gato.bredFor || "";


    document.getElementById("perfectFor").value =
        gato.perfectFor || "";


    document.getElementById("breedGroup").value =
        gato.breedGroup || "";


    document.getElementById("history").value =
        gato.history || "";


    document.getElementById("referenceImageId").value =
        gato.referenceImageId || "";


    document.getElementById("weight").value =
        gato.weight || "";


    document.getElementById("height").value =
        gato.height || "";


    document.getElementById("image").value =
        gato.image || "";


    mostrarMensagem(
        "Gato " +
        (gato.name || "") +
        " carregado para edição.",
        "info"
    );

}

function limparFormulario() {

    document.getElementById("catApiId").value = "";

    document.getElementById("name").value = "";

    document.getElementById("speciesId").value = "";

    document.getElementById("lifeSpan").value = "";

    document.getElementById("temperament").value = "";

    document.getElementById("origin").value = "";

    document.getElementById("countryCodes").value = "";

    document.getElementById("countryCode").value = "";

    document.getElementById("description").value = "";

    document.getElementById("bredFor").value = "";

    document.getElementById("perfectFor").value = "";

    document.getElementById("breedGroup").value = "";

    document.getElementById("history").value = "";

    document.getElementById("referenceImageId").value = "";

    document.getElementById("weight").value = "";

    document.getElementById("height").value = "";

    document.getElementById("image").value = "";

}