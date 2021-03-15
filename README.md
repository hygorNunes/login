## Introdução
Esse projeto faz parte de um desafio do grupo de estudos para node, o projeto prevê a criação de um sistema back-end que se conecta ao banco e cria, atualiza e deleta os usuários. Também é responsável pela autenticação de um usuário (com criptografia) e pela troca de senha. 

## Principais bibliotecas/frameworks

*  [NodeJS](https://nodejs.org/en/)
*  [ExpressJS](https://expressjs.com/pt-br/)
*  [MongooseJs (ORM)](https://mongoosejs.com/)
*  ES7 (ECMAScript 7)

## Estrutura do diretório
```
./
|-- config/ # Configurações gerais do ExpressJS 
|-- lib/ # Configurações de bibliotecas utilizadas no framework
|-- public/ # Diretório de conteúdo público, como: css, js, html, etc
|-- src/ # Priincipal diretório da API
    |-- controllers/ # Classes com os métodos que serão chamados pela rota
    |-- models/ # Modelo de dados (Domain)
    |-- repositories/ # Classes com as regras de negócio
    |-- routes/ # Classes com as rotas da API
    |-- app.js
|-- test/
|-- views/
|-- .babelrc
|-- .env.example # Arquivo exemplo com variaveis de ambiente para o projeto, deve ser alterado e renomeado para .env
|-- .eslintrc
|-- .gitignore
|-- .gitlab-ci.yml
|-- Dockerfile
|-- LICENCE
|-- README.md
|-- docker-compose.yml
|-- packge.json
|-- start.sh
```

## Como instalar dependências do node
`npm install`

## Como iniciar
`npm run start`

## Observação

É necessário criar o arquivo `.env` com base no arquivo `.env-example`;
