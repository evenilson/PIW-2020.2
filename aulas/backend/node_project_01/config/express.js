// Importando o módulo express (Padão CommomJS)
const express = require('express');

const routerAlunos = require("../app/routes/alunos")

module.exports = function(){
    let app = express();

    //Defindo varial de aplicação
    app.set("port", 8393);
    app.use(express.static("./public"));
    routerAlunos(app);

    return app;             
}