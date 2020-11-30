// Importando o módulo express (Padão CommomJS)
const express = require('express');

module.exports = function(){
    let app = express();

    //Defindo varial de aplicação

    app.set("port", 8393);
    return app;
}