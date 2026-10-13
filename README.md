# Calculadora Full-Stack com API

Calculadora web desenvolvida para praticar integração entre front-end e back-end.

O projeto possui uma interface feita com HTML, CSS e JavaScript e um back-end em Node.js com Express responsável por processar as operações matemáticas através de uma API.

## Funcionalidades

- Soma
- Subtração
- Multiplicação
- Divisão
- Porcentagem
- Validação de valores enviados
- Bloqueio de divisão por zero
- Histórico de cálculos salvo no `localStorage`
- Limpeza do histórico
- Comunicação entre front-end e API usando `fetch`

## Tecnologias utilizadas

### Front-end
- HTML
- CSS
- JavaScript

### Back-end
- Node.js
- Express
- CORS
- API REST

## Como funciona

O front-end envia uma requisição `POST` para o endpoint:

```text
/calcular
```

A API recebe:

```json
{
  "valorA": 10,
  "valorB": 5,
  "operador": "+"
}
```

e retorna o resultado do cálculo em JSON.

## Executando o projeto localmente

Entre na pasta do back-end:

```bash
cd backend
npm install
npm start
```

Depois abra o arquivo `frontend/index.html` no navegador.

> O front-end atualmente também está configurado para consumir a API publicada no Render.

## Objetivo do projeto

Este projeto foi criado para praticar a separação entre front-end e back-end, requisições HTTP, validação de dados e criação de uma API simples com Node.js e Express.

## Autor

**Maillon Andrade de Oliveira**

GitHub: [maillon49-prog](https://github.com/maillon49-prog)
