const express = require('express');// Exportando módulo (Padrão CommonJS)
const usuariosRouter = require('../app/routes/usuariosRouter.js');
const bodyParser = require("body-parser");

module.exports = function() {
    let app = express(); //Definindo variável de aplicação
    app.set("port", 8393);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static('./public'));

    usuariosRouter(app);
    return app;
};