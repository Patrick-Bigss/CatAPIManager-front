# 🐱 Cat Manager - Frontend

Frontend do projeto **Cat Manager**, desenvolvido como projeto final do curso de programação.

A aplicação possui uma interface web para gerenciamento de raças de gatos, permitindo consultar dados da **The Cat API**, visualizar as informações e realizar operações de cadastro, atualização e exclusão dos gatos armazenados no MySQL através do backend.

---

## 🚀 Sobre o projeto

O Cat Manager possui uma interface simples e intuitiva para que o usuário possa interagir com o sistema de gerenciamento de gatos.

Através da interface, é possível:

- 🐾 Consultar raças disponíveis na The Cat API
- 🔎 Visualizar informações dos gatos
- ➕ Salvar uma raça no banco de dados
- ✏️ Atualizar informações de um gato
- 🗑️ Excluir um gato
- 🗄️ Consultar os gatos armazenados no MySQL

O frontend não acessa o MySQL diretamente.

Toda a comunicação com o banco de dados é realizada através do **backend desenvolvido em Spring Boot**.

---

```text
Repositório do Backend:
🔗 Backend:
https://github.com/Patrick-Bigss/CatAPIManager-front

## 🔄 Funcionamento

O fluxo da aplicação funciona da seguinte maneira:

```text
                    USUÁRIO
                       ↓
                INTERFACE WEB
                       ↓
              HTML + JavaScript
                       ↓
                Spring Boot
                  ↙       ↘
                 ↓         ↓
           The Cat API    MySQL

A The Cat API fornece os dados das raças.

O backend recebe esses dados e realiza a comunicação com o MySQL.

O frontend é responsável por apresentar tudo isso para o usuário.

🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
Bootstrap 5
Fetch API
REST API
🎨 Interface

A interface foi desenvolvida com foco em simplicidade e facilidade de utilização.

O projeto possui uma identidade visual baseada no tema de gatos, utilizando:

🐱 Elementos relacionados a gatos
💜 Paleta de cores roxas e rosas
📱 Layout responsivo
🗂️ Cards para organização das informações
🔘 Botões para as operações do sistema
📋 Tabela para exibição dos gatos
🖼️ Exibição das imagens das raças
🔌 Comunicação com o Backend

O frontend utiliza JavaScript para realizar requisições HTTP ao backend.

A comunicação é feita utilizando a função:

fetch()

O backend é executado localmente através de:

http://localhost:8080

A principal rota utilizada pelo frontend é:

/gatinhos
🔄 Operações CRUD

O frontend possui botões que permitem realizar as quatro operações principais:

🟢 GET

Utilizado para consultar os gatos armazenados no MySQL.

GET /gatinhos

Também é utilizado para consultar as raças disponíveis na The Cat API através do backend:

GET /gatinhos/racas
🔵 POST

Utilizado para cadastrar uma nova raça no banco de dados.

POST /gatinhos

O usuário seleciona ou informa os dados de uma raça e o frontend envia essas informações para o backend.

🟡 PUT

Utilizado para atualizar os dados de uma raça que já foi cadastrada.

PUT /gatinhos/api/{catApiId}

O ID utilizado nessa operação é o ID da The Cat API.

Por exemplo:

abys
🔴 DELETE

Utilizado para excluir uma raça cadastrada no banco.

DELETE /gatinhos/api/{catApiId}

Assim como no PUT, o sistema utiliza o ID da The Cat API para localizar o registro.

🐈 Dados exibidos

O frontend pode apresentar informações como:

ID
ID da The Cat API
Nome
Temperamento
Origem
Descrição
Expectativa de vida
Peso
Altura
Imagem

Essas informações são recebidas através do backend.

📁 Estrutura do projeto

A estrutura básica do frontend é:

CatManagerFront
│
├── index.html
│
├── script.js
│
├── style.css
│
└── README.md
📄 index.html

Responsável pela estrutura da página.

Nele estão:

Formulários
Botões
Tabela
Campos para cadastro e atualização
Elementos da interface
📄 script.js

Responsável pela lógica do frontend.

É através dele que a aplicação:

Faz requisições ao backend
Busca os gatos
Consulta a The Cat API através do backend
Envia dados para cadastro
Atualiza registros
Exclui registros
Preenche a tabela
Manipula os dados recebidos
📄 style.css

Responsável pela aparência da aplicação.

O CSS adiciona:

Cores
Espaçamentos
Cards
Botões personalizados
Responsividade
Identidade visual do projeto

🔗 Backend

O backend deste projeto foi desenvolvido separadamente utilizando Java + Spring Boot.

Ele é responsável por:

Consumir a The Cat API
Receber requisições do frontend
Realizar operações CRUD
Comunicar-se com o MySQL

🎯 Objetivo do projeto

O principal objetivo do frontend foi colocar em prática conhecimentos de:

HTML
CSS
JavaScript
Bootstrap
Consumo de APIs
Requisições HTTP
Manipulação do DOM
Integração entre Frontend e Backend
Operações CRUD

O projeto também demonstra como uma interface web pode se comunicar com uma API REST desenvolvida em Spring Boot.

🧩 Arquitetura do projeto

O Cat Manager foi dividido em duas partes:

Frontend
HTML
CSS
JavaScript
Bootstrap

Responsável pela interface e interação com o usuário.

Backend
Java
Spring Boot
Spring Data JPA
MySQL

Responsável pelas regras da aplicação, banco de dados e comunicação com a The Cat API.

🐱 Resultado

O resultado é uma aplicação web onde o usuário pode consultar raças de gatos, escolher os dados que deseja armazenar e gerenciar esses registros através de uma interface própria.

Os dados da The Cat API são utilizados como fonte de informação, enquanto os gatos cadastrados passam a ser armazenados e gerenciados no MySQL através do backend.

👨‍💻 Autor

Patrick Leal

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento web e backend.
