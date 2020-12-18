// Importando o módulo express (Padão CommomJS)
const express = require('express');
const bodyParser = require("body-parser");

const routerAlunos = require("../app/routes/alunos");
const routerDisciplinas = require("../app/routes/disciplinas");
const routerMatriculas = require("../app/routes/matriculas");

module.exports = function(){
    let app = express();

    //Defindo varial de aplicação
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static("./public"));
    routerAlunos(app);
    routerDisciplinas(app);
    routerMatriculas(app);

    return app;             
}