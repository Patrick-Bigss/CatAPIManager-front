 const URL_API = "http://localhost:8080/teste";

function cadastrarGato() {

    const nome = document.getElementById("nome").value;

    const raca = document.getElementById("raca").value;

    const idade = document.getElementById("idade").value;

    const gato = {

        nome: nome,
        raca: raca,
        idade: idade

    };

        document.getElementById("nome").value = "";

        document.getElementById("raca").value = "";

        document.getElementById("idade").value = "";


        carregarGatos();

    })

    .catch(function(error) { console.log( "Erro:",error);

    });

}

function carregarGatos()
    
};