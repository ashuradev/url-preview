# Desafio 333

API do Desafio 333 de Outubro feita utilizando as seguintes ferramentas:

- Node
- Express
- Nodemon
- Domino
- Dotenv
- Node-fetch

# Índice

1. [Demonstração](#demonstração)
2. [Como funciona](#como-funciona)
3. [Requisitos do sistema](#requisitos-do-sistema)
4. [Como rodar o backend em ambiente de desenvolvimento](#como-rodar-o-backend-em-ambiente-de-desenvolvimento)

## Demonstração

A demo está em http://urlpreview333.herokuapp.com

## Como funciona

Para gerar uma preview de uma url, basta enviar um request do tipo POST para `/preview` com um corpo JSON contendo o `Content-type: application/json` e o parâmetro `url`.

Exemplo de request:

Cabeçalhos:

```
POST /preview
Content-type: application/json
```

JSON:

```json
{
    "url": "http://github.com"
}
```

Exemplo de resposta:

```json
{
  "url": "https://github.com",
  "sitename": "GitHub",
  "title": "Build software better, together",
  "description": "GitHub is where people build software. More than 40 million people use GitHub to discover, fork, and contribute to over 100 million projects.",
  "thumbnail": "https://github.githubassets.com/images/modules/open_graph/github-octocat.png",
  "image_type": "image/png",
  "image_width": "1200",
  "image_height": "620",
  "domain": "github.com"
}
```

## Requisitos do sistema

- NodeJS >=v10.16.3
- Yarn >=1.19.1 ou npm>=6.9.0

## Como rodar o backend em ambiente de desenvolvimento

Rode os seguintes comandos

```
$ cd backend
$ yarn install ou npm install
$ yarn start:dev ou npm run start:dev
```
