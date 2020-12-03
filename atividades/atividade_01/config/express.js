const express = require('express');// Exportando módulo (Padrão CommonJS)
const bodyParser = require("body-parser");

const usuariosRouter = require('../app/routes/usuariosRouter.js');
const postsRouter = require("../app/routes/postsRouter.js")

module.exports = function() {
    let app = express(); //Definindo variável de aplicação
    app.set("port", 8393);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static('./public'));

    usuariosRouter(app);
    postsRouter(app);
    
    return app;
};