const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * 
//  *Metodos HTTP
 * GET: busca informações
 * POST: Cria informações
 * PUT: Altera informações
 * DELETE: Deleta informações
 * 
 * node index.js executa o servidor
 * 
 * Tipos de parametros
 * Query Params: parametros enviado na rota após o ? (Fitros, paginação)
 * Routes Params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos, criar usuario, etc 
 */

/*
* Banco de dados
* Driver: Select * FROM users
* Query Builder table('users').select('*').where()
First eu instalo npm install knex pra ele trabalhar com o banco de dados que quero
Segundo eu instalo o driver do banco de dados que quero trabalhar tipo sql lite npm install sqllite3
depois eu rodo o knex npx knex init pra criar o arquivo de configuração.
Depois crio as migrations npx knex migrate:make create_ongs
altero lá dentro da migrations e depois acesso npx knex migrate:latest
*/