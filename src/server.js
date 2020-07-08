const express = require('express');
const routes = require('./routes');
require('./database')

const app = express();
app.use(express.json()); //pra receber as informações que vierem em formato json
app.use(routes);

app.listen(3333);