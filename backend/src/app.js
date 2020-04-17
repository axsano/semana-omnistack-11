const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate'); 
const routes = require('./routes');

const app = express();

app.use(cors()); // módulo de segurança
app.use(express.json()); // Transforma o .json enviado pela requisição por algo que seja interpretável pela aplicação
app.use(routes);
app.use(errors());

module.exports = app; 
/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informacao do backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar uma informacao no backend
 * DELETE: Deletar uma informacao no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o "?" (Filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * Para evitar de ter que finalizar a todo momento o index.js, basta instalar o pacote:
  * 
  * npm install nodemon
  * 
  * porém, com a opção -D para que seja utilizado apenas no ambiente de desenvolvimento (dev)
  * 
  * Além disso, a linha de scripts do package.json deve ser modificada para utilizar o nodemon:
  * "scripts": {
    "start": "nodemon index.js"
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */
