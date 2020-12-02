const express = require('express');// Exportando módulo (Padrão CommonJS)

module.exports = function() {
    let app = express(); //Definindo variável de aplicação
    app.set("port", 3000);
    app.use(express.static('./public'));
    return app;
};