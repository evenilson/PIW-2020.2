// Importando o módulo express (Padão CommomJS)
const express = require('express');

module.exports = function(){
    let app = express();

    //Defindo varial de aplicação
    app.set("port", 8393);
    app.use(express.static("./public"));

    //GET /alunos
    app.get("/alunos", function(req, res){
        res.json([
            {nome:"Victor", sobrenome:"Farias"},
            {nome:"Luis", sobrenome:"Andrade"},
        ]);
    });

    return app;             
}